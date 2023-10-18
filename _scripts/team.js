/*
  uniformize team members by width
*/

{
    const onLoad = () => {
        if(!window.location.pathname.includes("team")) return;

        const allPortraits = document.querySelectorAll(".portrait");

        let previousWidth;
        for(const p of allPortraits.entries()) {
            const portrait = p[1];
            if(p[0] == 0) {
                previousWidth = portrait.clientWidth;
                continue;
            }

            if(portrait.parentElement.parentElement.id == 'ex-members') break;
            
            if(Math.abs(previousWidth - portrait.clientWidth) > 15) {
                const target = portrait.parentElement;
                target.parentNode.insertBefore(document.createElement("br"), target);
            }

            previousWidth = portrait.clientWidth;
        }
    };

    // after page loads
    window.addEventListener("load", onLoad);
}
