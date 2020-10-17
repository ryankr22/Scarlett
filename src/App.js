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
      url:"https://lh3.googleusercontent.com/proxy/i1MCocodU8F-ik40ERpNQCz18d7lZsYSrZ3QBbhw2p0SSk2064zYLLlsheHtRlYgXNHYuQa9TTSEnaYJorfYXDJQ7TC7lBmdKQ4F2YkDcQGQ1Otb4cIq8KJiZEMfUrfIBWm35wKjYnVwQ0sx5C69vXaxcyXJgGaKBmEazhOWlL_9MUs3K_yrbYYplA9D1zVgJ1-mkkg-f3odb-dqYwaJ6g",
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
        
      
    </AppWrapper>
  );
}

export default App;
