import React , {useState} from 'react'

export default function About(props) {
//const [myStyle , setMyStyle] = useState(
  //      {
    //    color:'black',
      //  backgroundColor:'white'
        //}
//)
let myStyle={
  color:props.mode==='dark'?'white':'black',
  backgroundColor:props.mode==='dark'?'#28282B':'white'
}
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className='my-3'>About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Zoro
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This is the first item's accordion body. It is shown by default, until the collapse plugin adds the 
        appropriate classNamees that we use to style each element. These classNamees control the overall
         appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with 
         custom CSS or overriding our default variables. It's also worth noting that just about any HTML
          can go within the <code>.accordion-body</code>, though the transition does limit
           overflow.Roronoa Zoro, also known as "Pirate Hunter" Zoro, is a main combatant of the Straw 
           Hat Pirates, one of their two swordsmen, one of the Senior Officers of the Straw Hat Grand Fleet,
            and is publicly recognized as the right-hand man of his crew's captain Monkey D. Luffy.
            Formerly a bounty hunter, he is the second member of Luffy's crew and the first to join it,
             doing so in the Romance Dawn Arc.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Love You Zoro
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the
         appropriate classNamees that we use to style each element. These classNamees control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with 
          custom CSS or overriding our default variables. It's also worth noting that just about any HTML can 
          go within the <code>.accordion-body</code>, though the transition does limit overflow.Born in the
           East Blue, Zoro is the son of Tera and Roronoa Arashi, the grandson of Shimotsuki Furiko and
            Roronoa Pinzoro, and the grandnephew of Shimotsuki Ushimaru, making him a descendant of both the
             Shimotsuki Family of Wano Country and the legendary samurai, Shimotsuki Ryuma.
              As a master of Three Sword Style, a swordsmanship style which he created during his childhood
               training in Shimotsuki Village, Zoro is one of the three most powerful combatants of the Straw Hats,
                alongside Luffy and Sanji, who are referred to as the "Monster Trio". His dream is to become 
                the greatest swordsman in the world, in order to honor a promise he made to his deceased childhood
                 friend Kuina.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        More
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This is the third item's accordion body.It is hidden by default, until the collapse plugin adds the
         appropriate classNamees that we use to style each element. These classNamees control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition does limit overflow.In addition
             to his infamy as one of the Straw Hats and as a former bounty hunter, his sizeable bounty upon 
             arriving at the Sabaody Archipelago caused Zoro, along with Luffy to be included among the eleven 
             "Super Rookies", pirates who simultaneously reached the Red Line with bounties of over Beli100,000,000
              shortly before the Summit War.[26] He, the other ten Super Rookies, and Marshall D. Teach would go on
               to be referred to as the "Worst Generation".
      </div>
    </div>
  </div>
</div>
</div>
  )
}
