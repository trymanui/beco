import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router';

function Header() {
  
   const [showBtn, setShowBtn] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      if (y > 300 && y < lastY) setShowBtn(true);
      else setShowBtn(false);

      setLastY(y);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  // smooth fade like bigbasket
  const fade = Math.max(0, 1 - scrollY / 120);
  const scale = Math.max(0.85, 1 - scrollY / 300);



  return (
  <>
      {/* HEADER */}
      <div
        className="bg-[#0B6E4F] text-white px-4 pt-5 pb-6 shadow-sm"
      >
        <div className="flex items-start justify-between">
          
          {/* TEXT BLOCK EXACTLY LIKE PHOTO */}
          <div className="flex flex-col -mt-1"
            style={{
              transform: `scale(${scale})`,
              opacity: fade,
              transition: "transform 0.2s linear, opacity 0.2s linear",
            }}
          >
            <h1 className="text-[20px] leading-tight font-semibold">
              Beco: <span className="font-normal">Gov. E-Waste Collection</span>
            </h1>
            <p className="text-[13px] text-green-100 mt-1">
              Safe Disposal for a Greener Future.
            </p>
          </div>

          {/* PROFILE ICON EXACTLY LIKE PHOTO */}
          <div
            className="relative"
            style={{
              transform: `scale(${scale})`,
              opacity: fade,
              transition: "transform 0.2s linear, opacity 0.2s linear",
            }}
          >
            <div className="w-11 h-11 bg-white rounded-full shadow flex items-center justify-center">
              <Link to="/profile">
              <i className="fa-solid fa-user text-gray-800 text-2xl"></i>
              </Link>
            </div>
            {/* green dot badge */}
            <div className="w-3 h-3 bg-green-600 rounded-full absolute top-0 right-0 border-[2px] border-white"></div>
          </div>

        </div>
      </div>

      {/* STICKY SEARCH BAR */}
      <div className="sticky top-0 bg-[#0B6E4F] z-40 px-4 pb-3 pt-3 shadow-sm -mt-2 rounded-b-3xl">
        <div className="w-full flex items-center bg-white rounded-full px-4 py-3 shadow">
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>

          <input
            type="text"
            placeholder="Search for e-waste items to donate."
            className="flex-1 outline-none text-sm text-gray-700"
          />

        </div>
      </div>

      {/* BACK TO TOP (unchanged) */}
      {showBtn && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-24 right-4 bg-black text-white px-4 py-2 rounded-full shadow-lg text-sm flex items-center gap-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          Back to top
        </button>
      )}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eius, dolorem blanditiis sequi reiciendis laboriosam molestias aliquam pariatur amet officiis cum perspiciatis ad alias! Dolor adipisci nostrum ex corporis ullam.
      Earum inventore eos veritatis asperiores officiis eveniet molestiae magnam officia, enim sunt veniam soluta iste porro ab ducimus distinctio beatae. Fugit laborum blanditiis numquam sapiente consectetur earum repellat fugiat quo!
      Id provident assumenda tenetur veniam! Hic itaque nobis veritatis quas autem, culpa et explicabo vel vitae architecto delectus praesentium! Quaerat sint voluptatibus quis totam dolores consectetur voluptates quae fugiat assumenda!
      Vero at aspernatur id iure facilis tempora reprehenderit asperiores ducimus fugit, laborum provident quos molestiae earum velit. Quam dolore, voluptas quasi minus numquam, nisi, unde aspernatur libero enim reprehenderit alias.
      Expedita voluptates mollitia illo! Ea cum dicta quisquam dolorem sit provident! Soluta maiores animi quae obcaecati ipsum ad nobis, atque corrupti similique, blanditiis voluptate, excepturi totam sequi voluptatem suscipit distinctio?
      Totam, aperiam perferendis distinctio sint amet eos officia, debitis sapiente at, mollitia praesentium quam. Ratione eum qui ipsam harum aut consectetur iste velit beatae eos. Molestias explicabo necessitatibus at maxime.
      Minima sit obcaecati necessitatibus suscipit neque debitis quaerat iste dolorum sed assumenda, nulla provident, nemo quo recusandae exercitationem repellendus itaque ab tempora corporis accusamus maxime, consequatur quod! Ratione, aliquam deserunt.
      Ratione perspiciatis beatae perferendis delectus. Incidunt ad enim vitae quam praesentium voluptate atque non ipsa error temporibus earum sapiente tempora asperiores, minima magni quae totam unde eaque sit suscipit illum!
      Cupiditate, porro fuga, doloremque aspernatur possimus laudantium saepe accusantium temporibus facilis ad molestias mollitia exercitationem. Minus quis impedit dicta minima alias repudiandae animi facere, praesentium autem, ipsa, asperiores sit! Neque?
      Repellat expedita qui perspiciatis eos sed commodi eius iusto alias! Asperiores, unde accusamus consequuntur vel assumenda rerum, sit perferendis nostrum praesentium dignissimos optio repellat provident! Nulla culpa labore itaque ratione!
      Cupiditate, quis. Architecto possimus autem, maiores dolorum nulla corporis magnam dolorem ut reiciendis. Obcaecati sint iusto voluptatum fuga quisquam saepe voluptatibus ipsam rerum quam illo suscipit, non hic corporis atque!
      Impedit cupiditate provident ipsa quasi quod amet ad, sapiente assumenda ut porro aperiam. Quas ut et temporibus voluptatum pariatur, reprehenderit amet? Aliquid, consequatur. Optio pariatur provident unde ipsum fuga voluptas?
      Inventore ipsam, libero adipisci ducimus officiis neque? Corrupti similique hic eum veniam ad? Nihil beatae adipisci facilis ea, ipsam, fuga porro quaerat magnam inventore ipsa ullam obcaecati rerum tempora soluta!
      Dolores eius ex, ratione dolorum tenetur architecto nobis repellendus eveniet consequuntur! Neque temporibus, expedita nesciunt a voluptate sequi deserunt cupiditate exercitationem quas non voluptatem placeat, doloremque harum iusto omnis dolores!
      Labore quod consequatur itaque beatae porro sunt omnis ut suscipit temporibus eos. Eius sapiente aspernatur ducimus quidem vitae officia, et voluptatibus commodi fugiat quia molestiae nemo laudantium possimus suscipit soluta.
      Dolore corrupti officiis, neque esse vel accusamus ullam ab ipsum laboriosam perferendis, temporibus, sapiente iste fuga quo repudiandae veritatis aspernatur eos nobis inventore eveniet! Voluptates corrupti id doloribus ratione quis!
      Distinctio, facere neque sapiente inventore quidem a sunt voluptates perferendis, vel soluta et autem molestias maiores minus commodi beatae odit excepturi vitae ut dolore cupiditate asperiores ea deleniti reiciendis! Eveniet?
      Voluptatem quaerat rem neque eligendi facilis quas. Nam quidem eius ea sint eum sapiente voluptatibus adipisci qui officiis, earum, minus nulla ex alias ipsum dolorem molestiae ratione non, ipsa facere!
      A sed in laudantium, consectetur architecto repellendus eum deserunt aperiam natus facere aliquam ipsam quidem provident. Neque ipsum, accusantium, nam voluptatem mollitia esse ducimus libero, fugiat explicabo ullam totam incidunt.
      Mollitia porro provident eligendi culpa in velit assumenda voluptas ad amet. Ex ipsa blanditiis, expedita impedit commodi nobis, quidem nesciunt quasi voluptatum porro veniam officiis ea consectetur, unde voluptates exercitationem.
      Ipsum recusandae voluptates, quas iusto non possimus! Totam voluptas quam esse exercitationem aspernatur animi eligendi dolorum quo, magnam commodi ad est autem perferendis aperiam provident quis. Accusantium beatae voluptates aut?
      Itaque possimus facere necessitatibus? Deleniti assumenda nobis molestiae impedit accusantium molestias hic. Laboriosam et, quam quis veritatis aliquid iure est temporibus ipsum quasi? Eum facilis ratione ullam quam quis magnam.
      Repellendus quos, dicta fugit neque fuga necessitatibus, modi quod consequatur ipsa possimus quia obcaecati nihil sequi debitis explicabo voluptatibus tempora omnis inventore excepturi nulla odit voluptates quis laborum. Voluptates, id?
      Cupiditate porro, tempora sed incidunt hic voluptates voluptas expedita ut at inventore harum sit ea, nobis, vel fuga! Quas dolores sapiente, vitae saepe magnam facilis quo error impedit fuga enim.
      Corporis expedita, facere voluptas tempora repellendus dolore amet asperiores nemo quae aspernatur doloribus cupiditate eius voluptate sunt officia laudantium alias aliquid maiores! Labore aliquid qui sapiente vitae? Error, laborum et.
      Cum iure voluptas atque eaque amet ullam perspiciatis praesentium eum quam cupiditate distinctio sed corrupti tempora, minus ex dolor facere nobis a iste recusandae! Quod ducimus sed quidem cupiditate vero!
      Hic beatae alias inventore possimus minima accusantium cumque atque reprehenderit, vero sint deserunt blanditiis quos repudiandae ullam maiores molestias rerum provident, sit ex, enim praesentium dolore? Recusandae veniam excepturi cumque.
      Sunt enim, commodi ex repellat molestiae, expedita voluptatem minima labore nesciunt laborum a quasi asperiores atque recusandae itaque officia aliquam, dolorum ea natus est necessitatibus exercitationem provident! Consequuntur, hic fugit.
      Voluptate veniam omnis deleniti, neque dolorum nulla est in ratione debitis sit ipsa odio, magni cum, ducimus a repudiandae sint aut. Tempore, quam? Repudiandae doloribus sapiente, pariatur quidem et fuga.
      Assumenda id suscipit aliquid nemo fugiat possimus eius corporis iste omnis incidunt! Illum minima suscipit quidem, exercitationem accusantium, asperiores veritatis possimus nostrum assumenda, id nesciunt cupiditate consequatur quod earum distinctio?
      Numquam, facere. Iusto distinctio maxime maiores aliquam voluptas laborum officiis unde, optio cupiditate fuga molestias voluptatibus eius consectetur similique tenetur explicabo. Sint impedit, omnis pariatur repudiandae recusandae eligendi veritatis unde?
      Voluptas nam rerum laborum aliquam cum unde! Consectetur ab error eos porro quia explicabo exercitationem aspernatur perferendis cum, esse autem, illo velit neque, totam doloremque consequatur. Dolorem necessitatibus facilis quos.
      Modi deserunt explicabo aliquid neque esse! Saepe repellat ipsam totam velit consequuntur, maxime illum! Velit praesentium culpa, expedita doloremque eligendi omnis tempore autem et nisi quaerat sequi a non reprehenderit?
      Pariatur, architecto. Odit veritatis nemo beatae obcaecati, ut doloribus unde maiores repudiandae. Fugiat obcaecati nihil dolor facilis eveniet recusandae reiciendis non placeat, numquam voluptates maiores odit excepturi velit sit temporibus.
      Nihil, nam doloribus fugiat quia harum modi saepe consequatur. Maxime hic facere amet id aliquam explicabo eos vero, alias esse deleniti nostrum officia autem consequuntur cum et quas facilis sint.
      Quia ipsam, odio aliquam impedit beatae aperiam culpa aspernatur, maxime qui illum facere aut soluta non inventore. Aliquam, ipsa impedit totam delectus voluptatum vel, eveniet, ex reiciendis omnis nihil dignissimos.
      Odit fuga fugiat distinctio debitis, laborum, est cupiditate suscipit, quod tempore ut optio expedita. Quos at cupiditate repellendus veniam a neque ratione cum, laboriosam dolorem quaerat doloribus ab laudantium? Adipisci!
      Deleniti praesentium est architecto ad ullam veritatis illo autem sed nesciunt animi hic harum quod nam unde minima, facilis neque ipsam soluta, adipisci voluptates ipsa alias eligendi. Est, perspiciatis architecto!
      Accusantium cum laudantium officia, neque rem corrupti blanditiis odio eaque esse repudiandae sit, nulla reiciendis ad eveniet porro dicta, et ipsa nesciunt earum incidunt unde? Ipsam corporis assumenda quos. Veritatis.
      Sunt quia illo beatae eum. Quisquam, at. Maxime ratione, ullam quidem perspiciatis ipsam accusamus pariatur nostrum quibusdam optio voluptate nisi at eligendi odit atque delectus maiores est assumenda ipsum quam.
      Quibusdam at praesentium aut placeat explicabo dolor culpa possimus numquam autem, quam non impedit nisi quod in saepe ullam velit soluta nobis harum obcaecati fugiat. Quibusdam quas rerum praesentium eaque.
      Possimus distinctio ullam consequuntur iusto repellendus ab voluptate vitae pariatur ipsa recusandae? Necessitatibus veritatis fugiat, odit amet aliquid placeat explicabo voluptatibus id velit eum alias voluptatum exercitationem harum? Rem, necessitatibus.
      Minus provident officia sunt culpa repellat maxime tempora. Delectus fugiat porro reprehenderit sunt dolorem libero, ullam id illum nam distinctio, molestias exercitationem repellendus eos perspiciatis nulla dicta commodi? Esse, velit?
      Cum voluptates, eos aut nemo corporis voluptatum ipsa quasi cupiditate voluptatem labore facere autem repudiandae accusantium officia reprehenderit maiores libero vel magnam tempore, quisquam porro doloremque? Voluptas provident sunt nostrum!
      Reiciendis deserunt mollitia ducimus omnis inventore tenetur earum perspiciatis eaque, quae placeat. Illum nobis quaerat facilis earum vitae ad et dolorem eaque natus quod? Modi doloremque iure a illum quam!
      Blanditiis non consequuntur officiis illum dolor. Nulla harum odit, sunt amet voluptatem alias veniam similique, nesciunt ipsa aliquid quas dolorum deleniti facilis dolorem magni consectetur. Aliquid aspernatur repellendus explicabo nisi!
      Rerum enim, facere ducimus doloremque iste laborum fuga nobis consequuntur aperiam officia adipisci. Fugit, quae, natus unde necessitatibus accusantium magni, iusto quia commodi perferendis explicabo inventore! Saepe, exercitationem explicabo. Quam!
      Provident minus eligendi accusantium voluptas similique placeat! Suscipit, aspernatur. Laudantium voluptatibus suscipit magnam dolorem iusto dicta accusantium praesentium! Consequatur id, saepe molestias voluptate ullam rem unde ab pariatur. Consequatur, harum?
      Ad, dignissimos rerum atque, adipisci laudantium corrupti, facilis error eius itaque velit consectetur laboriosam. Quod mollitia deleniti, reiciendis repudiandae, vel sed, exercitationem dolorum possimus officia officiis molestiae laudantium numquam temporibus!
      Quasi nihil facere ex recusandae, suscipit quo esse officiis impedit dolores ea nostrum, iste qui laudantium quia laboriosam totam harum. Dolores eaque harum laudantium ut dolor, asperiores beatae consequuntur sequi.</p>
    </>
  );
}


export default Header


