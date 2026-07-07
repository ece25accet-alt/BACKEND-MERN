import { useEffect, useRef } from "react"


const Scrolling = () => {

    const homeRef = useRef()
    const contentRef = useRef()
    const reviewRef = useRef()
    const contactRef = useRef()

    const style = "border-2 rounded-xl p-2 mx-1 my-5"
    const divstyle = "p-1 my-3"

    const home=()=>{
        homeRef.current.scrollIntoView({
            behavior:"smooth"
        })
    }
    const content=()=>{
        contentRef.current.scrollIntoView({
            behavior:"smooth"
        })
    }
    const review=()=>{
        reviewRef.current.scrollIntoView({
            behavior:"smooth"
        })
    }
    const contact=()=>{
        contactRef.current.scrollIntoView({
            behavior:"smooth"
        })
    }

    const toTop=(e)=>{
        window.scrollTo({
            top:e,
            behavior:"smooth"
        })
    }


    useEffect(()=>{
    toTop(0) 
    },[])

  return (
    <>
    <div className="flex flex-col my-3">
    <div className="flex flex-row">
        <button className={style} onClick={home}>Home</button>
        <button className={style} onClick={content}>Content</button>
        <button className={style} onClick={review}>Reviews</button>
        <button className={style} onClick={contact}>Contact</button>
    </div>

    <div className={divstyle} ref={homeRef}>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro voluptate omnis sint facilis nostrum, veniam quibusdam sit eveniet inventore nobis vero dignissimos! Obcaecati aliquid similique quis, consequatur est eius?
        Totam expedita, temporibus, fugit excepturi iusto, minus est beatae tempora sed placeat mollitia nisi obcaecati odit consequuntur perferendis veniam sunt consequatur sequi commodi aut? Asperiores dolore nisi architecto ratione id.
        Amet ratione magnam deserunt tempore, debitis, aperiam pariatur facilis voluptatem aspernatur aliquam non. Numquam similique pariatur fuga maiores voluptatum accusantium velit vero nostrum optio eum, impedit et obcaecati aut harum.
        Voluptas earum architecto error ullam accusantium? Dicta esse fugit odio quasi similique inventore officia praesentium laudantium aspernatur, maiores omnis recusandae repudiandae itaque deleniti magni nostrum cupiditate nam sapiente? Quia, quae.
        Eligendi libero, nobis vel et soluta minima illum autem voluptatum ea dolorem beatae at eum asperiores deleniti placeat. Beatae temporibus ullam nihil nobis soluta id cum assumenda sit corporis explicabo!
        Commodi quidem minima quis illum, laudantium ullam, cumque in voluptate mollitia porro cupiditate repudiandae deleniti beatae, accusantium magni aspernatur nemo? Quos consequuntur architecto doloremque neque commodi consequatur. Voluptatem, iste quis?
        Culpa molestias iusto similique unde eaque beatae expedita accusamus nobis quisquam explicabo, perferendis animi totam. Obcaecati nulla aliquam tempore iste ullam ipsam ea sunt voluptatum dolorem aspernatur, ut, saepe eius!
        Adipisci molestiae quo placeat praesentium harum rem rerum recusandae, perferendis nam, quibusdam ipsa doloremque voluptatem velit? Totam labore deleniti consectetur alias! Nobis distinctio officia incidunt atque, eos velit placeat vitae.
        Officiis autem nesciunt voluptates dignissimos sint ex delectus voluptatem, doloribus voluptas eligendi quisquam unde sequi iste nulla vitae. Ducimus similique beatae veritatis provident sequi quod accusantium minus odio minima laborum?
        Illum, molestiae? Labore neque quos expedita harum esse voluptate voluptatem possimus tempora illo, natus nisi accusantium distinctio suscipit quo facilis perferendis modi laborum inventore perspiciatis officiis. Aliquam facere laborum repellendus!
        Nemo corporis officiis neque quasi totam labore atque a, voluptas voluptatum quia, tempora dicta autem inventore. Voluptatem rem voluptas eaque libero? Inventore provident animi maxime nisi eligendi. Modi, vero vitae.
        Perferendis commodi incidunt, similique doloremque, eos minima, quam dolor deleniti dignissimos culpa eveniet impedit quidem consectetur dolorem architecto accusamus tenetur reiciendis harum asperiores officiis laborum iure necessitatibus voluptas? Nesciunt, magnam.
        Beatae possimus quas consequatur? Ab, obcaecati at. Quis quia dignissimos similique repellendus eius corporis nobis harum assumenda, id suscipit ipsa iure nam voluptatem sequi veniam exercitationem nulla consectetur facilis quod.
        Consequuntur ipsum, aspernatur cumque doloremque odit tenetur facere earum alias libero. Omnis repellat nisi tenetur iusto suscipit porro magni delectus. Rerum, quis voluptas! Doloribus neque veniam rerum voluptates aspernatur voluptatem!
        Neque deserunt, adipisci quisquam impedit suscipit ea harum cum commodi inventore veritatis molestiae quam iure dolorem? Nesciunt facere accusantium laudantium consequuntur delectus exercitationem unde natus dolor ab! Consequatur, minima cum?
        Tempore omnis illo excepturi maiores qui amet delectus modi laborum dolores quidem sunt distinctio rem consequuntur eos ab, error doloremque necessitatibus harum sapiente, molestiae accusantium laboriosam facere? Eum, quidem modi!
        Unde omnis commodi quibusdam sint? Recusandae quod, qui eligendi facere aut error quidem temporibus voluptates ipsum eos, quasi consequuntur possimus sapiente ullam commodi voluptatum ipsam. Id magni accusamus explicabo quo.
        Dolorum optio adipisci consectetur dignissimos laboriosam voluptas aliquid nihil. Qui deleniti magnam esse. Voluptate ratione, maiores deleniti cupiditate adipisci pariatur repellendus beatae ipsam natus mollitia, harum corporis deserunt officiis consequuntur.
        Doloribus neque cum rerum nostrum quia recusandae, quo, perferendis reprehenderit ipsam consequuntur odio aliquid animi, placeat nisi asperiores dignissimos! Ipsum quae consequatur quam, unde aut ea nesciunt. Pariatur, consectetur voluptatem!
        Hic nemo, animi aut fugit placeat nobis corporis corrupti similique sint cumque, laudantium assumenda asperiores vero cupiditate accusantium aperiam ipsum molestiae repudiandae fuga suscipit nulla! A sit veniam consequuntur impedit!
        Voluptas repellendus autem sit, laboriosam similique amet eligendi dolorum cum ipsum dolores ipsa accusantium maxime! Perspiciatis distinctio tenetur, repellat, eveniet quidem esse omnis molestias aperiam corrupti quae ipsum sed ad?
        Harum, in eos. Molestias voluptas cumque inventore consectetur molestiae dolorum, voluptates ipsam quasi quos voluptatum explicabo delectus quod? Nostrum sequi sapiente deserunt culpa, cupiditate ab est officiis iure saepe blanditiis.
        Sint at enim dolorum molestiae, animi sunt iusto illum debitis illo optio tempora molestias nemo eius, mollitia recusandae exercitationem natus voluptatem accusantium iste, impedit unde quia. Voluptate soluta nobis unde.
        Quasi aspernatur in nostrum quas dolorum recusandae. Temporibus magni minus commodi accusantium, rem, sed tempora repudiandae, molestias necessitatibus fuga vel! Deleniti architecto, voluptates atque fugit praesentium rem ad qui voluptatibus.
        Nobis eveniet in sit commodi, explicabo asperiores nam expedita eligendi soluta sequi maiores veritatis impedit accusantium ipsum tenetur nesciunt id similique illum nostrum repellat ipsa aliquam at vitae. Cumque, aliquid.
        Aperiam, sint obcaecati minima aut ullam error. Ipsa ut animi, distinctio veniam pariatur odio eius! Quisquam atque dolorem possimus vitae ab. Cupiditate doloribus iste, voluptatem accusamus eos sint corporis explicabo.
        Sit dolorum veritatis maxime laborum tempore libero. Enim quos, tempore beatae doloribus aperiam ipsa possimus ducimus, illo dolorum voluptatibus corporis nulla libero, dignissimos optio ullam autem quia facere officia molestiae!
        Recusandae error soluta natus, veniam eligendi ipsam esse cumque ab eveniet nulla possimus ratione dolor, vel magnam officiis illo itaque repudiandae aperiam expedita, repellat tenetur? Iure ipsa id cupiditate reiciendis.
        Ipsam beatae quos ipsa, exercitationem mollitia maiores voluptate aperiam, unde repellendus, voluptas cumque provident officia. Molestiae quaerat sequi neque autem itaque vel architecto atque debitis, laborum rem illum officiis omnis.
        Praesentium, provident exercitationem! Hic voluptates repellendus alias autem eligendi perspiciatis eveniet similique animi temporibus earum. Earum consectetur impedit esse unde fugit maiores, dolor, nesciunt, sint officiis facere labore ipsam magni!</p>
    </div>
    
    <div className={divstyle} ref={contentRef}>
        <h1>Content</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro voluptate omnis sint facilis nostrum, veniam quibusdam sit eveniet inventore nobis vero dignissimos! Obcaecati aliquid similique quis, consequatur est eius?
        Totam expedita, temporibus, fugit excepturi iusto, minus est beatae tempora sed placeat mollitia nisi obcaecati odit consequuntur perferendis veniam sunt consequatur sequi commodi aut? Asperiores dolore nisi architecto ratione id.
        Amet ratione magnam deserunt tempore, debitis, aperiam pariatur facilis voluptatem aspernatur aliquam non. Numquam similique pariatur fuga maiores voluptatum accusantium velit vero nostrum optio eum, impedit et obcaecati aut harum.
        Voluptas earum architecto error ullam accusantium? Dicta esse fugit odio quasi similique inventore officia praesentium laudantium aspernatur, maiores omnis recusandae repudiandae itaque deleniti magni nostrum cupiditate nam sapiente? Quia, quae.
        Eligendi libero, nobis vel et soluta minima illum autem voluptatum ea dolorem beatae at eum asperiores deleniti placeat. Beatae temporibus ullam nihil nobis soluta id cum assumenda sit corporis explicabo!
        Commodi quidem minima quis illum, laudantium ullam, cumque in voluptate mollitia porro cupiditate repudiandae deleniti beatae, accusantium magni aspernatur nemo? Quos consequuntur architecto doloremque neque commodi consequatur. Voluptatem, iste quis?
        Culpa molestias iusto similique unde eaque beatae expedita accusamus nobis quisquam explicabo, perferendis animi totam. Obcaecati nulla aliquam tempore iste ullam ipsam ea sunt voluptatum dolorem aspernatur, ut, saepe eius!
        Adipisci molestiae quo placeat praesentium harum rem rerum recusandae, perferendis nam, quibusdam ipsa doloremque voluptatem velit? Totam labore deleniti consectetur alias! Nobis distinctio officia incidunt atque, eos velit placeat vitae.
        Officiis autem nesciunt voluptates dignissimos sint ex delectus voluptatem, doloribus voluptas eligendi quisquam unde sequi iste nulla vitae. Ducimus similique beatae veritatis provident sequi quod accusantium minus odio minima laborum?
        Illum, molestiae? Labore neque quos expedita harum esse voluptate voluptatem possimus tempora illo, natus nisi accusantium distinctio suscipit quo facilis perferendis modi laborum inventore perspiciatis officiis. Aliquam facere laborum repellendus!
        Nemo corporis officiis neque quasi totam labore atque a, voluptas voluptatum quia, tempora dicta autem inventore. Voluptatem rem voluptas eaque libero? Inventore provident animi maxime nisi eligendi. Modi, vero vitae.
        Perferendis commodi incidunt, similique doloremque, eos minima, quam dolor deleniti dignissimos culpa eveniet impedit quidem consectetur dolorem architecto accusamus tenetur reiciendis harum asperiores officiis laborum iure necessitatibus voluptas? Nesciunt, magnam.
        Beatae possimus quas consequatur? Ab, obcaecati at. Quis quia dignissimos similique repellendus eius corporis nobis harum assumenda, id suscipit ipsa iure nam voluptatem sequi veniam exercitationem nulla consectetur facilis quod.
        Consequuntur ipsum, aspernatur cumque doloremque odit tenetur facere earum alias libero. Omnis repellat nisi tenetur iusto suscipit porro magni delectus. Rerum, quis voluptas! Doloribus neque veniam rerum voluptates aspernatur voluptatem!
        Neque deserunt, adipisci quisquam impedit suscipit ea harum cum commodi inventore veritatis molestiae quam iure dolorem? Nesciunt facere accusantium laudantium consequuntur delectus exercitationem unde natus dolor ab! Consequatur, minima cum?
        Tempore omnis illo excepturi maiores qui amet delectus modi laborum dolores quidem sunt distinctio rem consequuntur eos ab, error doloremque necessitatibus harum sapiente, molestiae accusantium laboriosam facere? Eum, quidem modi!
        Unde omnis commodi quibusdam sint? Recusandae quod, qui eligendi facere aut error quidem temporibus voluptates ipsum eos, quasi consequuntur possimus sapiente ullam commodi voluptatum ipsam. Id magni accusamus explicabo quo.
        Dolorum optio adipisci consectetur dignissimos laboriosam voluptas aliquid nihil. Qui deleniti magnam esse. Voluptate ratione, maiores deleniti cupiditate adipisci pariatur repellendus beatae ipsam natus mollitia, harum corporis deserunt officiis consequuntur.
        Doloribus neque cum rerum nostrum quia recusandae, quo, perferendis reprehenderit ipsam consequuntur odio aliquid animi, placeat nisi asperiores dignissimos! Ipsum quae consequatur quam, unde aut ea nesciunt. Pariatur, consectetur voluptatem!
        Hic nemo, animi aut fugit placeat nobis corporis corrupti similique sint cumque, laudantium assumenda asperiores vero cupiditate accusantium aperiam ipsum molestiae repudiandae fuga suscipit nulla! A sit veniam consequuntur impedit!
        Voluptas repellendus autem sit, laboriosam similique amet eligendi dolorum cum ipsum dolores ipsa accusantium maxime! Perspiciatis distinctio tenetur, repellat, eveniet quidem esse omnis molestias aperiam corrupti quae ipsum sed ad?
        Harum, in eos. Molestias voluptas cumque inventore consectetur molestiae dolorum, voluptates ipsam quasi quos voluptatum explicabo delectus quod? Nostrum sequi sapiente deserunt culpa, cupiditate ab est officiis iure saepe blanditiis.
        Sint at enim dolorum molestiae, animi sunt iusto illum debitis illo optio tempora molestias nemo eius, mollitia recusandae exercitationem natus voluptatem accusantium iste, impedit unde quia. Voluptate soluta nobis unde.
        Quasi aspernatur in nostrum quas dolorum recusandae. Temporibus magni minus commodi accusantium, rem, sed tempora repudiandae, molestias necessitatibus fuga vel! Deleniti architecto, voluptates atque fugit praesentium rem ad qui voluptatibus.
        Nobis eveniet in sit commodi, explicabo asperiores nam expedita eligendi soluta sequi maiores veritatis impedit accusantium ipsum tenetur nesciunt id similique illum nostrum repellat ipsa aliquam at vitae. Cumque, aliquid.
        Aperiam, sint obcaecati minima aut ullam error. Ipsa ut animi, distinctio veniam pariatur odio eius! Quisquam atque dolorem possimus vitae ab. Cupiditate doloribus iste, voluptatem accusamus eos sint corporis explicabo.
        Sit dolorum veritatis maxime laborum tempore libero. Enim quos, tempore beatae doloribus aperiam ipsa possimus ducimus, illo dolorum voluptatibus corporis nulla libero, dignissimos optio ullam autem quia facere officia molestiae!
        Recusandae error soluta natus, veniam eligendi ipsam esse cumque ab eveniet nulla possimus ratione dolor, vel magnam officiis illo itaque repudiandae aperiam expedita, repellat tenetur? Iure ipsa id cupiditate reiciendis.
        Ipsam beatae quos ipsa, exercitationem mollitia maiores voluptate aperiam, unde repellendus, voluptas cumque provident officia. Molestiae quaerat sequi neque autem itaque vel architecto atque debitis, laborum rem illum officiis omnis.
        Praesentium, provident exercitationem! Hic voluptates repellendus alias autem eligendi perspiciatis eveniet similique animi temporibus earum. Earum consectetur impedit esse unde fugit maiores, dolor, nesciunt, sint officiis facere labore ipsam magni!</p>
    </div>
   
    <div className={divstyle} ref={reviewRef}>
        <h1>Review</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro voluptate omnis sint facilis nostrum, veniam quibusdam sit eveniet inventore nobis vero dignissimos! Obcaecati aliquid similique quis, consequatur est eius?
        Totam expedita, temporibus, fugit excepturi iusto, minus est beatae tempora sed placeat mollitia nisi obcaecati odit consequuntur perferendis veniam sunt consequatur sequi commodi aut? Asperiores dolore nisi architecto ratione id.
        Amet ratione magnam deserunt tempore, debitis, aperiam pariatur facilis voluptatem aspernatur aliquam non. Numquam similique pariatur fuga maiores voluptatum accusantium velit vero nostrum optio eum, impedit et obcaecati aut harum.
        Voluptas earum architecto error ullam accusantium? Dicta esse fugit odio quasi similique inventore officia praesentium laudantium aspernatur, maiores omnis recusandae repudiandae itaque deleniti magni nostrum cupiditate nam sapiente? Quia, quae.
        Eligendi libero, nobis vel et soluta minima illum autem voluptatum ea dolorem beatae at eum asperiores deleniti placeat. Beatae temporibus ullam nihil nobis soluta id cum assumenda sit corporis explicabo!
        Commodi quidem minima quis illum, laudantium ullam, cumque in voluptate mollitia porro cupiditate repudiandae deleniti beatae, accusantium magni aspernatur nemo? Quos consequuntur architecto doloremque neque commodi consequatur. Voluptatem, iste quis?
        Culpa molestias iusto similique unde eaque beatae expedita accusamus nobis quisquam explicabo, perferendis animi totam. Obcaecati nulla aliquam tempore iste ullam ipsam ea sunt voluptatum dolorem aspernatur, ut, saepe eius!
        Adipisci molestiae quo placeat praesentium harum rem rerum recusandae, perferendis nam, quibusdam ipsa doloremque voluptatem velit? Totam labore deleniti consectetur alias! Nobis distinctio officia incidunt atque, eos velit placeat vitae.
        Officiis autem nesciunt voluptates dignissimos sint ex delectus voluptatem, doloribus voluptas eligendi quisquam unde sequi iste nulla vitae. Ducimus similique beatae veritatis provident sequi quod accusantium minus odio minima laborum?
        Illum, molestiae? Labore neque quos expedita harum esse voluptate voluptatem possimus tempora illo, natus nisi accusantium distinctio suscipit quo facilis perferendis modi laborum inventore perspiciatis officiis. Aliquam facere laborum repellendus!
        Nemo corporis officiis neque quasi totam labore atque a, voluptas voluptatum quia, tempora dicta autem inventore. Voluptatem rem voluptas eaque libero? Inventore provident animi maxime nisi eligendi. Modi, vero vitae.
        Perferendis commodi incidunt, similique doloremque, eos minima, quam dolor deleniti dignissimos culpa eveniet impedit quidem consectetur dolorem architecto accusamus tenetur reiciendis harum asperiores officiis laborum iure necessitatibus voluptas? Nesciunt, magnam.
        Beatae possimus quas consequatur? Ab, obcaecati at. Quis quia dignissimos similique repellendus eius corporis nobis harum assumenda, id suscipit ipsa iure nam voluptatem sequi veniam exercitationem nulla consectetur facilis quod.
        Consequuntur ipsum, aspernatur cumque doloremque odit tenetur facere earum alias libero. Omnis repellat nisi tenetur iusto suscipit porro magni delectus. Rerum, quis voluptas! Doloribus neque veniam rerum voluptates aspernatur voluptatem!
        Neque deserunt, adipisci quisquam impedit suscipit ea harum cum commodi inventore veritatis molestiae quam iure dolorem? Nesciunt facere accusantium laudantium consequuntur delectus exercitationem unde natus dolor ab! Consequatur, minima cum?
        Tempore omnis illo excepturi maiores qui amet delectus modi laborum dolores quidem sunt distinctio rem consequuntur eos ab, error doloremque necessitatibus harum sapiente, molestiae accusantium laboriosam facere? Eum, quidem modi!
        Unde omnis commodi quibusdam sint? Recusandae quod, qui eligendi facere aut error quidem temporibus voluptates ipsum eos, quasi consequuntur possimus sapiente ullam commodi voluptatum ipsam. Id magni accusamus explicabo quo.
        Dolorum optio adipisci consectetur dignissimos laboriosam voluptas aliquid nihil. Qui deleniti magnam esse. Voluptate ratione, maiores deleniti cupiditate adipisci pariatur repellendus beatae ipsam natus mollitia, harum corporis deserunt officiis consequuntur.
        Doloribus neque cum rerum nostrum quia recusandae, quo, perferendis reprehenderit ipsam consequuntur odio aliquid animi, placeat nisi asperiores dignissimos! Ipsum quae consequatur quam, unde aut ea nesciunt. Pariatur, consectetur voluptatem!
        Hic nemo, animi aut fugit placeat nobis corporis corrupti similique sint cumque, laudantium assumenda asperiores vero cupiditate accusantium aperiam ipsum molestiae repudiandae fuga suscipit nulla! A sit veniam consequuntur impedit!
        Voluptas repellendus autem sit, laboriosam similique amet eligendi dolorum cum ipsum dolores ipsa accusantium maxime! Perspiciatis distinctio tenetur, repellat, eveniet quidem esse omnis molestias aperiam corrupti quae ipsum sed ad?
        Harum, in eos. Molestias voluptas cumque inventore consectetur molestiae dolorum, voluptates ipsam quasi quos voluptatum explicabo delectus quod? Nostrum sequi sapiente deserunt culpa, cupiditate ab est officiis iure saepe blanditiis.
        Sint at enim dolorum molestiae, animi sunt iusto illum debitis illo optio tempora molestias nemo eius, mollitia recusandae exercitationem natus voluptatem accusantium iste, impedit unde quia. Voluptate soluta nobis unde.
        Quasi aspernatur in nostrum quas dolorum recusandae. Temporibus magni minus commodi accusantium, rem, sed tempora repudiandae, molestias necessitatibus fuga vel! Deleniti architecto, voluptates atque fugit praesentium rem ad qui voluptatibus.
        Nobis eveniet in sit commodi, explicabo asperiores nam expedita eligendi soluta sequi maiores veritatis impedit accusantium ipsum tenetur nesciunt id similique illum nostrum repellat ipsa aliquam at vitae. Cumque, aliquid.
        Aperiam, sint obcaecati minima aut ullam error. Ipsa ut animi, distinctio veniam pariatur odio eius! Quisquam atque dolorem possimus vitae ab. Cupiditate doloribus iste, voluptatem accusamus eos sint corporis explicabo.
        Sit dolorum veritatis maxime laborum tempore libero. Enim quos, tempore beatae doloribus aperiam ipsa possimus ducimus, illo dolorum voluptatibus corporis nulla libero, dignissimos optio ullam autem quia facere officia molestiae!
        Recusandae error soluta natus, veniam eligendi ipsam esse cumque ab eveniet nulla possimus ratione dolor, vel magnam officiis illo itaque repudiandae aperiam expedita, repellat tenetur? Iure ipsa id cupiditate reiciendis.
        Ipsam beatae quos ipsa, exercitationem mollitia maiores voluptate aperiam, unde repellendus, voluptas cumque provident officia. Molestiae quaerat sequi neque autem itaque vel architecto atque debitis, laborum rem illum officiis omnis.
        Praesentium, provident exercitationem! Hic voluptates repellendus alias autem eligendi perspiciatis eveniet similique animi temporibus earum. Earum consectetur impedit esse unde fugit maiores, dolor, nesciunt, sint officiis facere labore ipsam magni!</p>
    </div>
    
    <div className={divstyle} ref={contactRef}>
        <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro voluptate omnis sint facilis nostrum, veniam quibusdam sit eveniet inventore nobis vero dignissimos! Obcaecati aliquid similique quis, consequatur est eius?
        Totam expedita, temporibus, fugit excepturi iusto, minus est beatae tempora sed placeat mollitia nisi obcaecati odit consequuntur perferendis veniam sunt consequatur sequi commodi aut? Asperiores dolore nisi architecto ratione id.
        Amet ratione magnam deserunt tempore, debitis, aperiam pariatur facilis voluptatem aspernatur aliquam non. Numquam similique pariatur fuga maiores voluptatum accusantium velit vero nostrum optio eum, impedit et obcaecati aut harum.
        Voluptas earum architecto error ullam accusantium? Dicta esse fugit odio quasi similique inventore officia praesentium laudantium aspernatur, maiores omnis recusandae repudiandae itaque deleniti magni nostrum cupiditate nam sapiente? Quia, quae.
        Eligendi libero, nobis vel et soluta minima illum autem voluptatum ea dolorem beatae at eum asperiores deleniti placeat. Beatae temporibus ullam nihil nobis soluta id cum assumenda sit corporis explicabo!
        Commodi quidem minima quis illum, laudantium ullam, cumque in voluptate mollitia porro cupiditate repudiandae deleniti beatae, accusantium magni aspernatur nemo? Quos consequuntur architecto doloremque neque commodi consequatur. Voluptatem, iste quis?
        Culpa molestias iusto similique unde eaque beatae expedita accusamus nobis quisquam explicabo, perferendis animi totam. Obcaecati nulla aliquam tempore iste ullam ipsam ea sunt voluptatum dolorem aspernatur, ut, saepe eius!
        Adipisci molestiae quo placeat praesentium harum rem rerum recusandae, perferendis nam, quibusdam ipsa doloremque voluptatem velit? Totam labore deleniti consectetur alias! Nobis distinctio officia incidunt atque, eos velit placeat vitae.
        Officiis autem nesciunt voluptates dignissimos sint ex delectus voluptatem, doloribus voluptas eligendi quisquam unde sequi iste nulla vitae. Ducimus similique beatae veritatis provident sequi quod accusantium minus odio minima laborum?
        Illum, molestiae? Labore neque quos expedita harum esse voluptate voluptatem possimus tempora illo, natus nisi accusantium distinctio suscipit quo facilis perferendis modi laborum inventore perspiciatis officiis. Aliquam facere laborum repellendus!
        Nemo corporis officiis neque quasi totam labore atque a, voluptas voluptatum quia, tempora dicta autem inventore. Voluptatem rem voluptas eaque libero? Inventore provident animi maxime nisi eligendi. Modi, vero vitae.
        Perferendis commodi incidunt, similique doloremque, eos minima, quam dolor deleniti dignissimos culpa eveniet impedit quidem consectetur dolorem architecto accusamus tenetur reiciendis harum asperiores officiis laborum iure necessitatibus voluptas? Nesciunt, magnam.
        Beatae possimus quas consequatur? Ab, obcaecati at. Quis quia dignissimos similique repellendus eius corporis nobis harum assumenda, id suscipit ipsa iure nam voluptatem sequi veniam exercitationem nulla consectetur facilis quod.
        Consequuntur ipsum, aspernatur cumque doloremque odit tenetur facere earum alias libero. Omnis repellat nisi tenetur iusto suscipit porro magni delectus. Rerum, quis voluptas! Doloribus neque veniam rerum voluptates aspernatur voluptatem!
        Neque deserunt, adipisci quisquam impedit suscipit ea harum cum commodi inventore veritatis molestiae quam iure dolorem? Nesciunt facere accusantium laudantium consequuntur delectus exercitationem unde natus dolor ab! Consequatur, minima cum?
        Tempore omnis illo excepturi maiores qui amet delectus modi laborum dolores quidem sunt distinctio rem consequuntur eos ab, error doloremque necessitatibus harum sapiente, molestiae accusantium laboriosam facere? Eum, quidem modi!
        Unde omnis commodi quibusdam sint? Recusandae quod, qui eligendi facere aut error quidem temporibus voluptates ipsum eos, quasi consequuntur possimus sapiente ullam commodi voluptatum ipsam. Id magni accusamus explicabo quo.
        Dolorum optio adipisci consectetur dignissimos laboriosam voluptas aliquid nihil. Qui deleniti magnam esse. Voluptate ratione, maiores deleniti cupiditate adipisci pariatur repellendus beatae ipsam natus mollitia, harum corporis deserunt officiis consequuntur.
        Doloribus neque cum rerum nostrum quia recusandae, quo, perferendis reprehenderit ipsam consequuntur odio aliquid animi, placeat nisi asperiores dignissimos! Ipsum quae consequatur quam, unde aut ea nesciunt. Pariatur, consectetur voluptatem!
        Hic nemo, animi aut fugit placeat nobis corporis corrupti similique sint cumque, laudantium assumenda asperiores vero cupiditate accusantium aperiam ipsum molestiae repudiandae fuga suscipit nulla! A sit veniam consequuntur impedit!
        Voluptas repellendus autem sit, laboriosam similique amet eligendi dolorum cum ipsum dolores ipsa accusantium maxime! Perspiciatis distinctio tenetur, repellat, eveniet quidem esse omnis molestias aperiam corrupti quae ipsum sed ad?
        Harum, in eos. Molestias voluptas cumque inventore consectetur molestiae dolorum, voluptates ipsam quasi quos voluptatum explicabo delectus quod? Nostrum sequi sapiente deserunt culpa, cupiditate ab est officiis iure saepe blanditiis.
        Sint at enim dolorum molestiae, animi sunt iusto illum debitis illo optio tempora molestias nemo eius, mollitia recusandae exercitationem natus voluptatem accusantium iste, impedit unde quia. Voluptate soluta nobis unde.
        Quasi aspernatur in nostrum quas dolorum recusandae. Temporibus magni minus commodi accusantium, rem, sed tempora repudiandae, molestias necessitatibus fuga vel! Deleniti architecto, voluptates atque fugit praesentium rem ad qui voluptatibus.
        Nobis eveniet in sit commodi, explicabo asperiores nam expedita eligendi soluta sequi maiores veritatis impedit accusantium ipsum tenetur nesciunt id similique illum nostrum repellat ipsa aliquam at vitae. Cumque, aliquid.
        Aperiam, sint obcaecati minima aut ullam error. Ipsa ut animi, distinctio veniam pariatur odio eius! Quisquam atque dolorem possimus vitae ab. Cupiditate doloribus iste, voluptatem accusamus eos sint corporis explicabo.
        Sit dolorum veritatis maxime laborum tempore libero. Enim quos, tempore beatae doloribus aperiam ipsa possimus ducimus, illo dolorum voluptatibus corporis nulla libero, dignissimos optio ullam autem quia facere officia molestiae!
        Recusandae error soluta natus, veniam eligendi ipsam esse cumque ab eveniet nulla possimus ratione dolor, vel magnam officiis illo itaque repudiandae aperiam expedita, repellat tenetur? Iure ipsa id cupiditate reiciendis.
        Ipsam beatae quos ipsa, exercitationem mollitia maiores voluptate aperiam, unde repellendus, voluptas cumque provident officia. Molestiae quaerat sequi neque autem itaque vel architecto atque debitis, laborum rem illum officiis omnis.
        Praesentium, provident exercitationem! Hic voluptates repellendus alias autem eligendi perspiciatis eveniet similique animi temporibus earum. Earum consectetur impedit esse unde fugit maiores, dolor, nesciunt, sint officiis facere labore ipsam magni!</p>
    </div>

    <button className={style} onClick={()=>toTop(790)}>Scroll to Top</button>
    </div>
    </>
  )
}

export default Scrolling
