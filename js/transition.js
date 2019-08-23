import Highway from "@dogstudio/highway"
import {TimelineLite} from "gsap"


export default class Fade extends Highway.Transition{
    in({from, to, done}){
        const timeline = new TimelineLite();
        timeline.fromTo(to, 0.5, {left: "100%",  top: "50%"},{left: "5%"}) //top: "50%",
        .fromTo(
            to,
            0.5,
            {height: "2vh"},
            {
                height: "100%", 
                top: "0%", 
                onComplete: function(){
                    from.remove()
                done()
            }
        }

    )
    .fromTo(to.children[0], 2, {opacity: 0}, {opacity: 1})


    

    }
    out({from, done}){
        done()

    }
}