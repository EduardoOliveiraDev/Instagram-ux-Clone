import { AiOutlineSearch, AiOutlineHeart, AiOutlineCompass } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { BsFillHouseDoorFill, BsEmojiSmile } from 'react-icons/bs';
import { CgAddR } from 'react-icons/cg';
import { FiMoreHorizontal, FiSend, FiBookmark } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';


import './Styles/Styles.css';
import logo from './Image/logo.svg';
import photo from './Image/photo.svg';
import debora from './Image/photos/debora.svg';
import joao from './Image/photos/joao.svg';
import proa from './Image/photos/proa.png';
import spacex from './Image/photos/spacex.jpg';

import feed1 from './Image/feed/feed1.png'
import feed2 from './Image/feed/feed2.png'


function App() {
  return (
    <div>

    <header>   
      <div className='header_main'>
        <img src={logo} className='header_logo' />

        <div className='header_search'>
            <AiOutlineSearch className='header_iconsearch'/>
            <input type="text" className='header_search_input' placeholder='Pesquisar' />
        </div>

        <div className='header_icon'>

          <div className='header_icons'>
            <BsFillHouseDoorFill className='header_icons'/>
          </div>

          <div className='header_icons'>
            <RiMessengerLine className='header_icons'/>
          </div>

          <div className='header_icons'>
            <CgAddR className='header_icons'/>
          </div>

          <div className='header_icons'>
            <AiOutlineCompass className='header_icons'/>
          </div>

          <div className='header_icons'>
            <AiOutlineHeart className='header_icons' />
          </div>

          <div className='header_icons'>
            <img src={photo} className='header_perfil' />
          </div>
        </div>
      </div>
    </header>

    <main>
        <div className='main_feed'>
          <div className='main_story'>
            <div className='main_story_next'> <GrFormNext className='next'/> </div>
            <div className='main_story_prev'> <GrFormPrevious className='prev'/> </div>

            <div className='main_story_container'>

              <div className='story-box'> <div className='story-photo-background'> <div className='story-photo'> <img src={debora} className='story-photouser'/> </div> </div> <p className='story-name'> Debora Pai... </p> </div>
              <div className='story-box'> <div className='story-photo-background'> <div className='story-photo'> <img src={joao} className='story-photouser'/> </div> </div> <p className='story-name'> João Con... </p> </div>
              <div className='story-box'> <div className='story-photo-background'> <div className='story-photo'> <img src={proa} className='story-photouser'/> </div> </div> <p className='story-name'> Instituto P... </p> </div>
              <div className='story-box'> <div className='story-photo-background'> <div className='story-photo'> <img src={proa} className='story-photouser'/> </div> </div> <p className='story-name'> Instituto P... </p> </div>
              <div className='story-box'> <div className='story-photo-background'> <div className='story-photo'> <img src={proa} className='story-photouser'/> </div> </div> <p className='story-name'> Instituto P... </p> </div>
              <div className='story-box'> <div className='story-photo-background'> <div className='story-photo'> <img src={proa} className='story-photouser'/> </div> </div> <p className='story-name'> Instituto P... </p> </div>
              <div className='story-box'> <div className='story-photo-background'> <div className='story-photo'> <img src={proa} className='story-photouser'/> </div> </div> <p className='story-name'> Instituto P... </p> </div>
              <div className='story-box'> <div className='story-photo-background'> <div className='story-photo'> <img src={proa} className='story-photouser'/> </div> </div> <p className='story-name'> Instituto P... </p> </div>



            </div>
          </div>

          <div className='main_publication'>
            <div className='main_publication_header'>
                <div className='main_publication_header_profile'>
                <img src={spacex} className='main_publication_header_profile_photo'/>
                </div>          
                
                <div className='main_publication_header_name'>   
                  <p> SpaceX </p>
                </div>
                
                <div className='main_publication_header_more'>   
                <FiMoreHorizontal className='main_publication_header_icon'/>
                </div>          
            </div> 

            <div className='main_publication_photo'>
                  <img src={feed2} className='photo'/>
            </div>

            <div className='main_publication_interaction'>

              <div className='main_publication_interaction_icons'>
                <AiOutlineHeart className='main_publication_interaction_icon'/>
                <FaRegComment className='main_publication_interaction_icon'/>
                <FiSend className='main_publication_interaction_icon'/>
              </div>
              <div className='main_publication_interaction_liked'> 2.054 curtidas</div>
              <div className='main_publication_interaction_time'> Há 2 segundos </div>
              <FiBookmark className='save'/>
                  
            </div>

            <div className='main_publication_comment'>
              <div className='main_publication_comment_emoji'>
                <BsEmojiSmile className='emoji' />
              </div>

              <div className='main_publication_comment_input'>
                <input type='text' placeholder='Adicione um comentário...'/>
              </div>
            
              <div className='main_publication_comment_submit'>
                <input type='submit' value='Publicar'/>
              </div>
  
            </div>
        
          </div>

          <div className='main_publication'>

          <div className='main_publication_header'>
                <div className='main_publication_header_profile'>
                <img src={proa} className='main_publication_header_profile_photo'/>
                </div>          
                
                <div className='main_publication_header_name'>   
                  <p> Instituto Proa </p>
                </div>
                
                <div className='main_publication_header_more'>   
                <FiMoreHorizontal className='main_publication_header_icon'/>
                </div>          
            </div> 

            <div className='main_publication_photo'>
                  <img src={feed1} className='photo'/>
            </div>

            <div className='main_publication_interaction'>

              <div className='main_publication_interaction_icons'>
                <AiOutlineHeart className='main_publication_interaction_icon'/>
                <FaRegComment className='main_publication_interaction_icon'/>
                <FiSend className='main_publication_interaction_icon'/>
              </div>
              <div className='main_publication_interaction_liked'> 3.204 curtidas</div>
              <div className='main_publication_interaction_time'> Há 12 segundos </div>
              <FiBookmark className='save'/>
                  
            </div>

            <div className='main_publication_comment'>
              <div className='main_publication_comment_emoji'>
                <BsEmojiSmile className='emoji' />
              </div>

              <div className='main_publication_comment_input'>
                <input type='text' placeholder='Adicione um comentário...'/>
              </div>
            
              <div className='main_publication_comment_submit'>
                <input type='submit' value='Publicar'/>
              </div>
  
            </div>
        

          </div>

      </div>

      <div className='main_profiles'>
        <div className='main_profile'>
          <div className='main_profile_box'>
            <div className='main_profile_box1'> <img src={proa} className='profile' /> </div>
            <div className='main_profile_box2'> 
              <p className='title1'> instituto_proa  </p> 
              <p className='title2'> Instituto Proa </p> 
            </div>
            <div className='main_profile_box3'>
              <p className='title3'> Mudar </p>
            </div>
          </div>

          <div  className='main_profile_box_text'>
            <p className='text1'>Sugestões para você</p>
            <p className='text2'>Ver tudo</p>
          </div>

          <div  className='main_profile_box_profiles'>
            <div className='profile_box'>
              <div className='box_photo'> <img src={proa} className='profile'/> </div>
                <div className='box_infoname'>
                  <div className='box_name'> institutoproa </div>
                  <div className='box_info'> Segue você</div>
                </div>
              <div className='box_follow'> Seguir </div>
            </div>

            <div className='profile_box'>
              <div className='box_photo'> <img src={proa} className='profile'/> </div>
                <div className='box_infoname'>
                  <div className='box_name'> institutoproa </div>
                  <div className='box_info'> Segue você</div>
                </div>
              <div className='box_follow'> Seguir </div>
            </div>

            <div className='profile_box'>
              <div className='box_photo'> <img src={proa} className='profile'/> </div>
                <div className='box_infoname'>
                  <div className='box_name'> institutoproa </div>
                  <div className='box_info'> Segue você</div>
                </div>
              <div className='box_follow'> Seguir </div>
            </div>

            <div className='profile_box'>
              <div className='box_photo'> <img src={proa} className='profile'/> </div>
                <div className='box_infoname'>
                  <div className='box_name'> institutoproa </div>
                  <div className='box_info'> Segue você</div>
                </div>
              <div className='box_follow'> Seguir </div>
            </div>

            <div className='profile_box'>
              <div className='box_photo'> <img src={proa} className='profile'/> </div>
                <div className='box_infoname'>
                  <div className='box_name'> institutoproa </div>
                  <div className='box_info'> Segue você</div>
                </div>
              <div className='box_follow'> Seguir </div>
            </div>



          </div>

        </div>
      </div>

    </main>

    </div>
  );
}

export default App;
