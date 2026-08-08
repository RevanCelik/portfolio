const projectInsightsScroller = document.querySelector(".project-insights");

if (projectInsightsScroller) {
    let touchStartX = 0;
    let touchStartY = 0;

    function getMaximumScrollLeft() {
        return (
            projectInsightsScroller.scrollWidth -
            projectInsightsScroller.clientWidth
        );
    }

    function clampScrollPosition() {
        const maximumScrollLeft = getMaximumScrollLeft();

        if (projectInsightsScroller.scrollLeft < 0) {
            projectInsightsScroller.scrollLeft = 0;
        } else if (projectInsightsScroller.scrollLeft > maximumScrollLeft) {
            projectInsightsScroller.scrollLeft = maximumScrollLeft;
        }
    }

    projectInsightsScroller.addEventListener(
        "touchstart",
        (event) => {
            const touch = event.touches[0];
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
            clampScrollPosition();
        },
        { passive: true }
    );

    projectInsightsScroller.addEventListener(
        "touchmove",
        (event) => {
            const touch = event.touches[0];
            const movementX = touch.clientX - touchStartX;
            const movementY = touch.clientY - touchStartY;

            if (Math.abs(movementX) <= Math.abs(movementY)) {
                return;
            }

            const maximumScrollLeft = getMaximumScrollLeft();
            const pullsPastStart =
                projectInsightsScroller.scrollLeft <= 0 && movementX > 0;
            const pullsPastEnd =
                projectInsightsScroller.scrollLeft >= maximumScrollLeft - 1 &&
                movementX < 0;

            if (pullsPastStart || pullsPastEnd) {
                event.preventDefault();
                clampScrollPosition();
            }
        },
        { passive: false }
    );

    projectInsightsScroller.addEventListener("scroll", clampScrollPosition, {
        passive: true
    });
}
