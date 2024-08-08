import React, { useState } from 'react';
import ProgramBoxes from './components/ProgramBoxes';
import './Programmes.css';
import { useInView } from 'react-intersection-observer';

export default function Programmes({ mode }) {
  console.log(mode);
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const [imageRef, imageInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [headingRef, headingInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div>
      {/* <div className="programcontainer"> */}
      {/* <div className={mode === 'dark' ? 'programcontainer dark-mode' : 'programcontainer'}> */}
      <div className={`programcontainer ${mode === 'dark' ? 'dark-mode' : ''}`}>
        {/* <div ref={imageRef} className={`programm-png-image ${imageInView ? 'animate__animated animate__fadeIn' : ''}`}></div> */}
        <div ref={headingRef} className={`start-heading ${headingInView ? 'animate__animated animate__fadeIn' : ''}`}>What Can You Do To Help ?</div>
        <div ref={overviewRef} className={`programmes-overview ${overviewInView ? 'animate__animated animate__fadeIn' : ''}`}>
          Shifting our lifestyle and consumer choices is one way we can help address particular problems; getting politically active with our voices and votes can also help push for more systemic, widespread change. And one of the most effective ways to help realize a more sustainable future is to also support environmental nonprofits.
          {/* <br/><br/> */}
          In light of this, we put together this nonexhaustive list of 34 nonprofits you can check out and support for a sustainable future.
        </div>
        <h1 className='program-heading'>Programmes</h1>
        <div className="allprograms">
          <ProgramBoxes id="a_growing_culture" program_title="A Growing Culture" program_info="The majority of food globally is produced by smallholder farmers and producers. A Growing Culture is a nonprofit focused on advancing a culture of farmer " join_link="#" />
          <ProgramBoxes id="Blue_Sphere_Foundation" program_title="Blue Sphere Foundation" program_info="Blue Sphere Foundation is a nonprofit working to safeguard the world’s oceans through action, activism, and art. Started by a global team of experts and  conservation where they are able to gather information..." join_link="#"></ProgramBoxes>
          <ProgramBoxes id='Jane_Goodall_Institute' program_title="Jane Goodall Institute" program_info="The Jane Goodall Institute is a nonprofit founded by the famous scientist to further her mission of saving chimpanzees from habitat destruction and trafficking.  broader nature conservation with a focus on wildlif" join_link="" />
          {/* <br/> */}
          <ProgramBoxes id='National_Audubon_Society' program_title="National Audubon Society" program_info="The National Audubon Society is an American nonprofit conservation organization working to protect birds and the wild places they need to thrive. Originally founded in the 1890s in protest of the  " join_link="" />
          <ProgramBoxes id='SeaLegacy' program_title="SeaLegacy" program_info="SeaLegacy is a collective of photographers, filmmakers, and storytellers committed to creating healthy and abundant oceans for people and the planet. Founded by National Geographic" join_link="" />
          <ProgramBoxes id='One_Tree_Planted' program_title="One Tree Planted" program_info="One Tree Planted is a 501(c)(3) nonprofit based in Vermont that has a simple directive: one dollar = one tree. Founded in 2014 with a mission to make it easy for people to help" join_link="" />

        </div>
        {!showMore && (<button className="showmore-programpage" onClick={handleShowMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
        )}
        {/* <button className='showmore'onClick={ShowMore}>More</button> */}
        {showMore && (<div className="allprograms" id='aftershow'>
          <ProgramBoxes id='WeForest' program_title="WeForest" program_info="WeForest is an NGO that was founded as a simple solution to global warming. The group works to empower communities and create sustainable, high standard, and scalable initiatives for  " join_link="" />
          <ProgramBoxes id='Rainforest_Alliance' program_title="Rainforest Alliance" program_info="The Rainforest Alliance is a 501(c)(3) nonprofit building alliances to create a better future for people and planet. They offer a certification program for brands selling rainforest-friendly products and work alongside activists, businesses, " join_link="" />
          <ProgramBoxes id='Cool_Effect' program_title="Cool Effect" program_info="Cool Effect is a 501(3)(c) nonprofit with a simple mission: to reduce carbon emissions. It combines science, expertise, and transparency to create communities invested in reducing carbon pollution. For example, its earliest" join_link="https://www.cooleffect.org/donate" />
          <ProgramBoxes id='Fibershed' program_title="Fibershed" program_info="Fibershed is a 501(3)(c) nonprofit re-envisioning a system of regional and regenerative fiber systems. It initially began in 2010 as a challenge by its founder, Rebecca Burgess, to only wear " join_link="https://fibershed.org/join/" />
          <ProgramBoxes id='earthjustice' program_title="EarthJustice" program_info="Earthjustice is the United States’ largest environmental law organization, “because the earth needs a good lawyer.” Founded in the 1960s, Earthjustice attorneys have since supported " join_link="" />
          <ProgramBoxes id='The_Soil_Association' program_title="The Soil Association" program_info="The Soil Association is a U.K.-based charity working with members to advocate for healthy, humane, and sustainable systems for food, farming, and land use. The group lobbies politicians, certifies " join_link="https://www.soilassociation.org/support-us/make-a-donation/" />
          <button className="showmore-programpage" id='showless-programpage' onClick={handleShowMore}>
            Show Less
          </button>
        </div>

        )}
      </div>
    </div>

  );
}
