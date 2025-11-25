import { useEffect } from "react";

const useTextReplacer = () => {
    useEffect(() => {
        const formatDateToVietnamese = (dateString) => {
            if (!dateString) return "";

            const date = new Date(dateString);
            if (isNaN(date.getTime())) return dateString;

            const daysOfWeek = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];

            const dayOfWeek = daysOfWeek[date.getDay()];
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return `${dayOfWeek}, ${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`;
        };

        const translations = [
            {
                selector: 'a.nav-link[href*="/dates"]',
                replacements: { ngày: "Ngày" },
            },
            {
                selector: "nav.nav.main-nav > a.nav-link",
                replacements: { Courses: "Khoá học" },
            },
            {
                // ĐƠN GIẢN HÓA SELECTOR - bỏ .show và .menu-dropdown-enter-done
                selector: ".dropdown-menu a.dropdown-item",
                replacements: {
                    Dashboard: "Bảng điều khiển",
                    Profile: "Hồ sơ",
                    Account: "Tài khoản",
                    Logout: "Đăng xuất",
                },
            },
        ];

        const replaceTexts = () => {
            translations.forEach(({ selector, replacements }) => {
                const elements = document.querySelectorAll(selector);
                elements.forEach((el) => {
                    Object.entries(replacements).forEach(([eng, viet]) => {
                        if (el.textContent.trim() === eng) {
                            el.textContent = viet;
                        }
                    });
                });
            });
        };

        const replaceDates = (node = document.body) => {
            const replaceInTextNode = (textNode) => {
                let text = textNode.textContent;
                let modified = false;

                const pattern1 =
                    /\b(Mon|Monday|Tue|Tuesday|Wed|Wednesday|Thu|Thursday|Fri|Friday|Sat|Saturday|Sun|Sunday),?\s+(Jan|January|Feb|February|Mar|March|Apr|April|May|Jun|June|Jul|July|Aug|August|Sep|September|Oct|October|Nov|November|Dec|December)\s+(\d{1,2}),?\s+(\d{4})\b/gi;

                if (pattern1.test(text)) {
                    text = text.replace(pattern1, (match) => {
                        try {
                            return formatDateToVietnamese(match);
                        } catch (e) {
                            return match;
                        }
                    });
                    modified = true;
                }

                const pattern2 = /\b(\d{4})-(\d{2})-(\d{2})\b/g;
                if (pattern2.test(text)) {
                    text = text.replace(pattern2, (match) => {
                        try {
                            return formatDateToVietnamese(match);
                        } catch (e) {
                            return match;
                        }
                    });
                    modified = true;
                }

                const monthReplacements = {
                    January: "Tháng 1",
                    February: "Tháng 2",
                    March: "Tháng 3",
                    April: "Tháng 4",
                    May: "Tháng 5",
                    June: "Tháng 6",
                    July: "Tháng 7",
                    August: "Tháng 8",
                    September: "Tháng 9",
                    October: "Tháng 10",
                    November: "Tháng 11",
                    December: "Tháng 12",
                    Jan: "Th1",
                    Feb: "Th2",
                    Mar: "Th3",
                    Apr: "Th4",
                    Jun: "Th6",
                    Jul: "Th7",
                    Aug: "Th8",
                    Sep: "Th9",
                    Oct: "Th10",
                    Nov: "Th11",
                    Dec: "Th12",
                };

                Object.entries(monthReplacements).forEach(([eng, viet]) => {
                    const regex = new RegExp(`\\b${eng}\\b`, "g");
                    if (regex.test(text)) {
                        text = text.replace(regex, viet);
                        modified = true;
                    }
                });

                if (modified) {
                    textNode.textContent = text;
                }
            };

            const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, {
                acceptNode: (node) => {
                    const parent = node.parentElement;
                    if (parent && (parent.tagName === "SCRIPT" || parent.tagName === "STYLE")) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    if (node.textContent.trim().length > 0) {
                        return NodeFilter.FILTER_ACCEPT;
                    }
                    return NodeFilter.FILTER_REJECT;
                },
            });

            const textNodes = [];
            let currentNode;
            while ((currentNode = walker.nextNode())) {
                textNodes.push(currentNode);
            }

            textNodes.forEach(replaceInTextNode);
        };

        const replaceAll = () => {
            replaceTexts();
            replaceDates();
        };

        // Initial run
        const timeouts = [0, 100, 300, 500, 1000].map((delay) => setTimeout(replaceAll, delay));

        // Observer với debounce để catch dropdown animations
        let observerTimeout;
        const observer = new MutationObserver((mutations) => {
            clearTimeout(observerTimeout);

            // DEBOUNCE để đợi animation hoàn tất
            observerTimeout = setTimeout(() => {
                replaceTexts();

                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            replaceDates(node);

                            // SPECIFIC: Check nếu là dropdown menu
                            if (node.classList && node.classList.contains("dropdown-menu")) {
                                console.log("Dropdown menu detected, running replaceTexts");
                                replaceTexts();
                            }
                        } else if (node.nodeType === Node.TEXT_NODE) {
                            replaceDates(node.parentElement);
                        }
                    });
                });
            }, 100); // Debounce 100ms để đợi animation
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true, // THÊM: Theo dõi attribute changes (class changes)
            attributeFilter: ["class"], // CHỈ theo dõi class changes
        });

        return () => {
            timeouts.forEach(clearTimeout);
            clearTimeout(observerTimeout);
            observer.disconnect();
        };
    }, []);
};

export const TextReplacerProvider = ({ children }) => {
    useTextReplacer();
    return children;
};
