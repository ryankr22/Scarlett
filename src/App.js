import React, {useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {Row, Col, Container } from 'react-bootstrap';

export const AppWrapper = styled.div`
  background-color: #282c34;
  padding: 2em;
`;

export const ImgStyled = styled.img`
  width: 800px;  
`;

export const ImageArrow = styled.img`
  width: 100px;
  padding: 140px 0;
  cursor: pointer;
`;

export const H1 = styled.h1`
  color: #b2d8d8;
  text-align: center;
  padding-bottom: 1em;
`;

export const H2 = styled.h2`
  color: #FFF;
  text-align: center;
  margin-top: 2em;
`;


function App() {
  const [showImage, toggleImage] = useState(true);
  const [title, setTitle] = useState("Pokemon who have been discovered! By Scarlett James");
  const [imageDesc, setImageDesc] = useState("");
  const [page, setPage] = useState(0);
  const [activeImg, setImg] = useState("https://wallpapercave.com/wp/upmtCfm.jpg");
  const [activeCaption, setCaption] = useState("Ash and Brock and his new friends are playing with their pokemon!");


  const [imgArray, addImage] = useState([
    // {
    //   url: "https://www.mercurynews.com/wp-content/uploads/2020/07/EdpCFBsXoAEeUmF.jpg?v=1",
    //   caption: "These are all the pokemon going to poke fest"
    // },
    // {
    //   url: "https://i.pinimg.com/originals/4a/bc/4e/4abc4ec217dc8fe9de35f2fda3d16935.png?v=2",
    //   caption: "Mew is playing with Mewtwo!"
    // },
    {
      url: "https://wallpapercave.com/wp/upmtCfm.jpg",
      caption: "Ash and Brock and his new friends are playing with their pokemon!"
    },
    {
      url: "https://www.gannett-cdn.com/presto/2019/12/13/PREN/056dc099-5c18-47af-a416-435f29175b70-Switch_PokemonSwordPokemonShield_artwork_01_png_jpgcopy.jpg?width=660&height=425&fit=crop&format=pjpg&auto=webp",
      caption: "Magmazel and her friends are having a cookout in the wilds!"
    },
    {
      url: "https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_masters/pokemon-masters-ex-169.jpg",
      caption: "Lily and her team are challenging team black light!"
    },
    {
      url: "https://cdn.vox-cdn.com/thumbor/wGX4rDhTZuKQj4G3CWFgCzomRWk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18329871/pokemon_masters_key_art_1.jpg",
      caption: "Bella is with Pikachu and she is battling against team light!"
    },
    {
      url: "https://dw9to29mmj727.cloudfront.net/products/782009246633.jpg",
      caption: "Ash and his new friend are going to their next journey!"
    },
    {
      url: "https://cdn.mos.cms.futurecdn.net/FBX4XRRYKM9hYZ5YmBkGVn.jpg",
      caption: "Magmazel is going to the pokemon center!"
    },
    {
      url: "https://img.gfinityesports.com/news/image/3/4/2048x0-nc/image_38_PZzGBkx.png",
      caption: "Magmazel finally got to the pokemon center and next she's going to the train."
    },
    {
      url: "https://d1lss44hh2trtw.cloudfront.net/assets/article/2019/08/20/pokemon-sword-shield-08-20-19_feature.jpg",
      caption: "Magmazel finally went to the train and now she's going to the professor!"
    },
    {
      url: "https://marriland.com/wp-content/uploads/2019/06/Magnolia_and_Trainers-600x338.jpg",
      caption: "Magmazel finally made it to the professor's house with her friend Hop. Next she is going to catch a pokemon."
    },
    {
      url:"https://www.denofgeek.com/wp-content/uploads/2019/02/pokemon_sword_and_shield_facts.jpg?fit=1280%2C720",
      caption: "Magmazel finally found a pikachu and now she is going to watch it with one throw. Next she is going to pack up and look funny and go on the train."
    },
    {
      url:"https://www.lifewire.com/thmb/LpX-pswhY9_OnwLbHDdFgKU5fGM=/1500x1500/filters:fill(auto,1)/Pokemon-Sword-and_Shield_HeroSquare-363294f1152d45319dd28c7a2228e303.jpg",
      caption:"Magmazel finally packed up and went on the train. She is looking funny just like she told you. "
    },
    {
      url:"https://img.game8.co/3220151/a609965d2b4e0c0d3df6e74d5825496f.jpeg/show",
      caption:"Magmazel finally made her hair look different and finally got a new shirt and got a firebike and she finally found hop in the woods with her gengar."
    },
    {
      url:"https://d.newsweek.com/en/full/1346529/pokemon-sword-shield-soccer-stadium.jpg?w=1600&h=1600&q=88&f=0a878e8d476864b65c3089a07c17e2f6",
      caption:"Magmazel after she went on the train she found a gym, a grass type gym, she luckily said once she ran in, oh my I can't believe I finally found the gym, the gym was in the woods. Magmazel said."
    },
    {
      url:"https://cdn.mos.cms.futurecdn.net/A599EXPn63C7kv7bYz6aRQ-1200-80.jpg",
      caption:"Magmazel finally found the next gym, she rided on her bike and she put her white helmet on and she took off in one flash, and dirt flew on hop and he yelled WAIT LET ME KEEP UP and Magmazel said sorry I have to go. Then before you know it Magmazel was gone."
    },
    {
      url:"https://icdn2.digitaltrends.com/image/digitaltrends/amazon-pre-order-pokemon-sword-shield-nintendo-switch-re.jpg",
      caption:"Magmazel was battling with her pokemon. She finally found a piece of grass that she can practice battling on."
    },
    {
      url:"https://gameranx.com/wp-content/uploads/2019/12/2019120921340000-3C66B776DB1AA06323037049FACD96D3.jpg",
      caption:"Magmazel put on her rain clothes and she found a guy who had a sword hair and a girl was wearing a shield hair. Magmazel thought they were just costumes but when she took off the costumes she found a shield and a sword pokemon, the legendary pokemon the professor was talking about. Then magmazel brought the sword and shield back to the professor and she put them at the statue of the sword and shield. Then she went somewhere else to find more pokemon."
    },
    {
      url:"https://cdn.vox-cdn.com/thumbor/QG_f_wjx3yoMoCf2SM_7By8v_SU=/0x0:1280x720/1200x800/filters:focal(538x258:742x462)/cdn.vox-cdn.com/uploads/chorus_image/image/65705425/76941643_10157884328182652_2699326571180720128_o.0.jpg",
      caption:"Magmazel finally went to the wilds and she was looking for pokemon. She finally caught the evolved form of mudhorse, she looked closely and it looked a little bit bigger than it seemed. Then she ran away from it and watched a diglett fight the evolved form of diglett, dugtrio. Then she went somewhere else."
    },
    {
      url:"https://cdn.mos.cms.futurecdn.net/A599EXPn63C7kv7bYz6aRQ-1200-80.jpg",
      caption:"Magmazel finally found the castle she came from, she wanted to go back inside but her mind kept stopping her. She kept thinking about the evolved form of mudhorse but she caught the eye of bulbafett, but then she just ran her way back into the castle."
    },
    {
      url:"https://static.gosunoob.com/img/1/2019/11/Camping-with-Friends-in-Pokemon-Sword-Shield.jpg",
      caption:"Magmazel was looking at her Cinderace and Drednaw she finally looked at her tent and she went back inside it."
    },
    {
      url:"https://www.videogameschronicle.com/files/2020/01/1.png",
      caption:"Magmazel colored up her hair and wore her chinese yellow costume. She went to chinese, she finally found a bridge to get to chinese. But then she caught the eye of a girl."
    },
    {
      url:"https://d28ipuewd7cdcq.cloudfront.net/assets/article/2020/06/19/pokemon-sword-shield-isle-of-armor-dojo-feature_feature.png",
      caption:"Magmazel said thats the girl right there, shes facing chinese too. Maybe she got to it first. Maybe she got the same table."
    },
    {
      url:"https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_sword_shield/screenshots/08.jpg",
      caption:"Magmazel was fighting a dynamax pokemon with her friends. Then she looked a little closely and it looked much bigger and it had a green stick in its mouth. Magmazel said oh my, it wasn't bigger it was small. It didn't have a stick in his mouth and now it does. Her partner said yes it does maybe you're just imagining things. Then magmazel took off on her bike."
    },
    {
      url:"https://cdn57.androidauthority.net/wp-content/uploads/2019/06/pokemon-sword-shield-wild-area-cycling.jpg",
      caption:"Magmazel finally found a river she caught the eye of a pokemon and she went towards it."
    },
    {
      url: "https://i.kym-cdn.com/photos/images/newsfeed/001/499/885/ee8.gif",
      caption: "Magmazel finally found a pokemon, she circled around it and she kept thinking about how is it doing without a pokemon trainer."
    },
    {
      url: "https://d.newsweek.com/en/full/1547841/pokemon-sword-shield-chain-fishing.webp?w=600&q=75&f=fb52ac765a8c66ae4305633a25bcdd0d",
      caption: "Magmazel went fishing and she saw some yellow. She assumed it was a strong pokemon. The only pokemon covered with yellow like the one in the picture can only be strong. Magmazel said quietly, maybe this is just a dream, but maybe not it could not. I hope its a super strong pokemon just like olivia."
    },
    {
      url: "https://img-eshop.cdn.nintendo.net/i/a42b65a7d1f30834b6964c908d78b259ce8a6113b5ffdb713dec75c59ae983e9.jpg?w=1000",
      caption: "Magmazel found a river and she went on her bike and went on it and she weared a real helmet. She was driving down it and and she saw a big ocean."
    },
    {
      url: "https://poketouch.files.wordpress.com/2020/01/beach_wild_area_pokemon_sword_and_shield.jpg",
      caption: "Magmazel was walking on a beach she started to run because the waves were just following her but soon she caught the eye of a pokemon. Two pokemon actually."
    },
    {
      url: "https://cdn.wccftech.com/wp-content/uploads/2020/06/Pokemon-Sword-and-Shield-The-Isle-of-Armor-02-qhd.jpg",
      caption: "Magmazel didn't know what to do, should she throwed a poke ball at the pokemon or should she run away? She only had one idea, escape."
    },
    {
      url: "https://s3.amazonaws.com/prod-media.gameinformer.com/styles/body_default/s3/2020/01/09/905e40b4/isleofarmor1.9800a.jpg",
      caption: "Magmazel just took off and run once she saw those two pokemon. She never thought she would saw her again, but luckily she caught the eye of a fence."
    },
    {
      url: "https://gamespot1.cbsistatic.com/uploads/original/1595/15950357/3653470-pokemon%20sword%20and%20shield%20expansion.jpg",
      caption: "Magmazel just kept running and running even though she saw that fence. She kept running and running and she splashed a little bit of sand on the ground. Magmazel said so loud, oh my I can't believe my leg is covered in sand. No worries I can wash it out in the ocean. Luckily Magmazel caught the eye of a big big big big big big biiiiiiiigggg..."
    },
    {
      url: "https://imgix.mic.com/uploads/image/2020/1/9/5a28db33-7023-4257-b06f-8582400a3ead-pkmn2.png?w=646&fit=max&auto=format%2Ccompress&cs=srgb&q=70",
      caption: "Tower! She couldn't believe it, but then she turned around and started running and running and running and running and running and running."
    },
    {
      url: "https://poketouch.files.wordpress.com/2020/01/beach_wild_area_pokemon_sword_and_shield.jpg",
      caption: "Magmazel kept running and running and running until magmazel said wooo I'm exhausted. Oh what is that?"
    },
    {
      url: "https://cdn.vox-cdn.com/thumbor/y_bP9NFRFmWarS5f3iyWQHjkBP0=/0x0:1280x720/1200x800/filters:focal(551x224:755x428)/cdn.vox-cdn.com/uploads/chorus_image/image/66967363/EbIysiAUcAA3LtS.0.jpg",
      caption: "Tower! Raichu, do you see that its a big tower maybe I could get some sleep and we could get some food. I know, what about I should head a little bit closer."
    },
    {
      url: "https://gamewith-en.akamaized.net/article/thumbnail/rectangle/19351.png",
      caption: "*deep breath sounds from running* woo, good thing raichu is in my pokeball, he wouldn't like to run this much."
    },
    {
      url: "https://cdn.vox-cdn.com/thumbor/qJFTYhqva6o_8oCcsppk_qCWk3E=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20047270/EbIysiAUcAA3LtS.jpg",
      caption: "Raichu we finally just need to get closer."
    },
    {
      url: "https://www.serebii.net/pokearth/maps/galar/69.jpg",
      caption: "Finally, come on out pokeball! Finally I made it, what about I just head on in."
    },
    {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaLRn_jAOp-AHCI6Q8oD5ahWtPzY0NCVC5_g&usqp=CAU",
      caption: "*deep breath sounds from running*, woo who knew this was such hard work, good thing I put raichu back in his pokeball. Hey theres a little cave, maybe I can run through it."
    },
    {
      url: "https://i1.wp.com/www.imore.com/sites/imore.com/files/styles/large/public/field/image/2020/01/pokemon-sword-shield-expansion-pass-001.jpg?w=1200&ssl=1",
      caption: "woo, getting to this cave was not easy, good thing i put raichu back in his pokeball. I can't believe I keep saying that but at least it reminds me. I'm just going to rest here, but tomorrow I'll keep doing my journey."
    },
    {
      url: "https://img.gfinityesports.com/news/image/1/4/2048x0-nc/review_ss_5hGybNr.png",
      caption: "Scorbunny if you can hear me just give me a thumbs up. Scorbunny!"
    },
    {
      url: "https://static1-www.millenium.gg/articles/7/91/47/@/102753-part19-article_m-2.png",
      caption: "Its me the shield girl, with the red suit, magmazel you know you're facing real danger. Once the sword and shield mix together and they went inside the sword and shield pokemon and here comes the professor now."
    },
    {
      url: "https://www.crystal-dreams.us/Random/Shield/iamaprincessnowtoo.png",
      caption: "Its me the sword boy, magmazel the reason we have our hair shaped like the sword and shield pokemon its because we're the sword and shield pokemon's parents. Yes Magmazel? Magmazel said quietly, why have you by lying 100 years, its because we have to protect the sword and shield pokemon as their parents. You better go because I bet rose is wondering about you."
    },
    {
      url: "https://cdn1.dotesports.com/wp-content/uploads/2019/11/24204831/Screenshot_2019-11-24-11-Pokemon-Sword-and-Pokemon-Shield-Official-Trailer-YouTube1.jpg",
      caption: "Magmazel said loudly, ahh I wonder what will be at the stadium maybe there will be 100 things or 100 even more things, what will hop decide? Well he is right in front of me how about I ask him. Hey Hop, is it good against things that are happy? Hop said loudly, YESSSS."
    },
    {
      url: "https://i.ytimg.com/vi/7VQHtFtrasg/maxresdefault.jpg",
      caption: "YEEEEEEEEESSSSSSSSSSSSSSSSSSSSSSS!!!! Of course it is magamazel you just don't realize, we're going to battle LEEEEEEOOOOONNNNNNNN!!!"
    },
    {
      url: "https://static.zerochan.net/Pok%C3%A9mon.Sword...Shield.full.2807283.png",
      caption: "magmazel said to hop, hey look hop there is 100 pokemon in the wilds. Hop said Yea! Leon is hanging out on a cord by the stadium, on top of the roof on rose's tower. Magamazel said well it is roses tower of course, we're not allowed to be there except Leon and rose. Maybe we'll find a trainer at the pokemon stadium. I wonder maybe we'll battle Nessa. Hop said I'm sure we'll battle nessa!"
    },
    {
      url: "https://am24.mediaite.com/tms/cnt/uploads/2019/06/Wanting-Nessas-skin-color-to-be-accurate-is-not-an-attack.jpg",
      caption: "Hop, let me think about Nessa"
    },
    {
      url: "https://static.zerochan.net/Pok%C3%A9mon.Sword...Shield.full.2807283.png",
      caption: "magmazel said, hop look we'll see nessa once we get our grass badge. Hop said, YAAAAY THIS RULES, maybe we'll find a boy there or something. Let me think about a boy, hop said."
    },
    {
      url: "https://64.media.tumblr.com/467de5f9671ca7a857b215bff17fc7e1/tumblr_psmxjshanN1y04c4fo1_1280.png",
      caption: "*kissy sounds* *kissy sounds* *kissy sounds*, hop, hop wake up stop dreaming about boys magmazel said."
    },
    {
      url: "https://static.zerochan.net/Pok%C3%A9mon.Sword...Shield.full.2807283.png",
      caption: "Hop, you know you're not allowed to think about boys, you know you're not the king so you can't do that. Leon is, so what about we just think about you being the king. Hop said, thats a great idea!"
    },
    {
      url: "https://media.comicbook.com/2020/02/hop-1205354-1280x0.jpeg",
      caption: "Hop, wake up, wake up, we're done thinking about you being the king!"
    },
    {
      url: "https://static.zerochan.net/Pok%C3%A9mon.Sword...Shield.full.2807283.png",
      caption: "Ahhhh why would you not let me be the king? I miss being king, as much as I miss wooloo."
    },
    {
      url: "https://cdn.vox-cdn.com/thumbor/wvlA2J3Io1NHL-EJKwGmz4fy-FA=/1400x788/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19813228/Screen_Shot_2020_03_17_at_10.15.50_AM.png",
      caption: "Woo loo, woo loo I miss you! Hop, hop stop dreaming about woo loo!"
    },
    {
      url: "https://pm1.narvii.com/7501/be2a4fc81323bde74d4010189de6f902e095cf8dr1-717-819v2_uhq.jpg",
      caption: "Woo loo I miss you, oo I miss you, oo I miss you, times are rough. Hop, hop stop dreaming about woo loo when he was a baby!"
    }, 
    {
      url: "https://static.zerochan.net/Pok%C3%A9mon.Sword...Shield.full.2807283.png",
      caption: "Sigh, you don't understand you just have to do this. You have to let me dream about woo loo, i miss him back at home. Alright I'll just send you a picture of him and me."
    },
    {
      url: "https://cdn1.dotesports.com/wp-content/uploads/2019/11/24204831/Screenshot_2019-11-24-11-Pokemon-Sword-and-Pokemon-Shield-Official-Trailer-YouTube1.jpg",
      caption: "Tick tick tick tick tick Magmazel said oh thats you texting me, Hop are you really just texting me pictures of you and woo loo? Hop said, yes thats it! Bingo!"
    },
    {
      url: "https://media.comicbook.com/2020/03/hop-1211527-1280x0.jpeg",
      caption: "Wow hop, these are marvelous pictures of you and woo loo. Hop said, its just me when I was a little kid with woo loo."
    },
    {
      url: "https://pm1.narvii.com/7501/be2a4fc81323bde74d4010189de6f902e095cf8dr1-717-819v2_uhq.jpg",
      caption: "Wow hop, all of these two more pictures of you and woo loo are amazing. I'm sorry I said that I just don't want you to keep worrying about woo loo so you won't be stressed. Its okay as long as I listen to these pictures it will be fine!"
    },
    {
      url: "https://cdn1.dotesports.com/wp-content/uploads/2019/11/24204831/Screenshot_2019-11-24-11-Pokemon-Sword-and-Pokemon-Shield-Official-Trailer-YouTube1.jpg",
      caption: "Hop, all these pictures are amazing. I'll show my mom once we get back from training. One thing is keeping me back, this train is taking so long I can barely feel my feet. My feet are getting worried we'll never walk again. Maybe we should stop the train or something. Or we could just break its gears or we could just tell them we need to get off or that this is our stop. Of course the lounge isn't too far. We've been traveling for a 100 miles but we're almost at the wilds train station."
    },
    {
      url: "https://i.ytimg.com/vi/7VQHtFtrasg/maxresdefault.jpg",
      caption: "Magmazel I can't believe it, its me hop. I can't believe it, we're here!!!"
    },
    {
      url: "https://static1-www.millenium.gg/articles/2/91/32/@/102519-1201596-2019110815291100-3c66b776db1aa06323037049facd96d3-full-1-article_m-1.jpg",
      caption: "Choo choo!! Oh I think this train stopped oh yeah it did stop, oh yeah the train stopped, okay honey its time to get off. Its me hop, these people keep talking, lets get off the train hurry!"
    },
    {
      url: "https://cdn.mos.cms.futurecdn.net/NoMVz74e8vnWgNXZozHo4W.png",
      caption: "whew, magmazel said good thing the train finally stopped. Now my feet are comfortable and rested. I really hope I can get off it now."
    },
    {
      url: "https://www.gamespew.com/wp-content/uploads/2019/11/Pokemon-Sword-3-696x391.jpg",
      caption: "Magmazel its me hop, look at the wilds! This place is like amazing. Magmazel said, oh you're right hop. Maybe we'll be able to catch a wild pikachu. Hey there is one over there! Hop said, the first one to find it gets to catch it and makes their dreams come true and that's what we're going to do!"
    }, 
    {
      url: "https://cdn.images.express.co.uk/img/dynamic/143/590x/Pokemon-Nintendo-Switch-1093249.jpg?r=1551340305316",
      caption: "Pika Pika Pika Pika Pika Pika!"
    },
    {
      url: "https://i.kinja-img.com/gawker-media/image/upload/t_original/zf1fo6t86mf5y24hwxzv.jpg",
      caption: "Pokeball Go!!!"
    },
    {
      url: "https://www.gamespew.com/wp-content/uploads/2019/11/Pokemon-Sword-3-696x391.jpg",
      caption: "Magmazel I can't believe it you crushed my dream and filled yours with a pikachu. Well I'll just find another pikachu for me to catch and make my dream come true but you can keep the first one. But rememeber I wont be easy on you."
    },
    {
      url: "https://cdn.onebauer.media/one/media/5dd7/cb60/2687/4c71/11e7/85a9/pokemon-sword-shield.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg",
      caption: "Magmazel, its me hop the one thats throwing the pokeball watch me. I'm going to catch a pikachu! Pokeball go!"
    },
    {
      url: "https://freegametips.com/wp-content/uploads/2019/11/Pok%C3%A9mon-Sword-and-Shield-Live-the-Wild-Area-from-a-1024x576.jpg",
      caption: "*Stirring sounds* *Stirring sounds* Magmazel said oh yay! this soup is going to be super good, my pokemon will like it! Even snorlax! *Stirring sounds* *Stirring sounds*"
    }
  ]);      

  function nextPage() {
    if (page === imgArray.length -1) return;    
    setPage(page + 1);

    setImg(imgArray[page + 1].url);
    setCaption(imgArray[page + 1].caption);
  }

  function prevPage() {
    if (page === 0) return;

    setPage(page - 1);

    setImg(imgArray[page - 1].url);
    setCaption(imgArray[page - 1].caption);
  }

  async function goToLastPage() {
    let i = imgArray.length - 1;    
    await setPage(i);

    setImg(imgArray[i].url);
    setCaption(imgArray[i].caption);
  }

  return (    
    <AppWrapper>      
        <H1>
        {title}
        </H1>

        <Row>
          <Col xl="1">
            <ImageArrow onClick={() => prevPage()} src="https://www.clker.com/cliparts/2/9/c/f/11954229651703455648kuba_arrow_button_set_1.svg.hi.png" />
          </Col>
          <Col xl="10" className="text-center">
            <ImgStyled src={activeImg} alt="logo" key={Date.now()}/>
          </Col>
          <Col xl="1">
            <ImageArrow src="Circle.png" onClick={() => nextPage()}/>
          </Col>
        </Row>

        <H2>
          {activeCaption}
        </H2>
        
      <Row>
        <button value="Go to last page" onClick={() => goToLastPage()} >Go to last page</button>
      </Row>
    </AppWrapper>
  );
}

export default App;
