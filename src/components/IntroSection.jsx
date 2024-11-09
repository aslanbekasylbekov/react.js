import React from "react";
// export default function IntroSection(){
//     return (
//         <section>
//             <h1 className="centered">Программа обучения
//             «React-разработчик»</h1>
//             <h3 className="centered" style={{color:'#666'}}>На курсе вы не просто изучите кусочки React, а поймете принципы работы с фреймворками и полноценно освоите React    </h3>
//         </section>
//     )
// }
export default function IntroSection() {
    return React.createElement(
        'section',
        null,
        React.createElement('h1', {className:'centered' , key:1}, 'Result University'),
        React.createElement('h3', {className:'centered', style:{color:'#666'}, key:2}, 'На курсе вы не просто изучите кусочки React, а поймете принципы работы с фреймворками и полноценно освоите React')
    )
}