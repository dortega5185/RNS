import React from 'react'
import rns from '../images/rns.jpg'
import lifetime from '../images/Epilepsy-Intro_B.jpg'
import RnsTreatment from '../images/rns-treatment.png'
import Stages from '../images/stages.png'
import eeg from '../images/eeg.jpg'
import rnsdata from '../images/rnsdata.png'
import ReactPlayer from 'react-player'

const MainPage = () => {
  return (
    <div className='main'>
      <h1>RNS and its Attempt to Help with Seizures</h1>

      <img className='mainPic' src={rns} alt='RNS System for Epilepsy' />

      <section className='top-section'>
        <img
          className='lifetime'
          src={lifetime}
          alt='lifetime data for epilepsy patients'
        />
        <section className='right-side'>
          <p>
            When a seizure occurs, there are bursts of electrical activity in
            your brain. This activity causes different symptoms depending on the
            type of seizure and what part of the brain is involved. Seizures can
            take on many different forms, affecting people in different ways.
            Anything that your brain is capable of, applies the same during a
            seizure. For example, your brain helps you move, see, feel and do
            many other things. Those same functions fully apply during a seizure
            as well, voluntarily or involuntarily. Also, in some seizures, parts
            of the brain can still function normally while others can’t.
            Seizures have a beginning, middle, and end, but sometimes not all
            the parts of a seizure are visible or easy to tell apart. It’s
            possible you won’t have every stage or symptom, but if you have more
            than one seizure, you may notice that your seizures are very similar
            or can repeat in a similar fashion. Seizures are complex, they come
            and go, some you’re possibly able to anticipate while others are
            sudden.
          </p>

          <br />

          <p>
            Those that can be anticipated allow for the person having a seizure
            better prepare so nothing dangerous occurs, an early sign of a
            seizure is called a prodrome. These feelings are usually not part of
            the seizure, but they serve as a warning sign that a seizure may
            come, if you were a person that has these signs you can take steps
            to stay safe and position yourself in a safer area. Some people have
            an "aura," or warning. This is the first symptom of a seizure. It’s
            considered part of the seizure, since bursts of electrical activity
            have already initiated in the brain when this occurs. During this
            part of the seizure, you are still conscious and aware of what is
            going on. An aura is often a change in feeling, sensation, thought,
            or behavior. If you have more than one seizure, you may have a
            similar aura each time. Some don't experience or sense the aura or
            warning. When they have a seizure, they lose consciousness or
            awareness immediately. Typically, an aura happens before the main
            part of a seizure. The aura can occur as an isolated incident,
            without any other symptoms. Those are defined as a simple partial
            seizure.
          </p>

          <br />

          <p>
            A generalized tonic-clonic seizure, sometimes called a grand mal
            seizure, is a disturbance in the functioning of both sides of your
            brain. This disturbance is caused by electrical signals spreading
            through the brain inappropriately. Often this will result in signals
            being sent to your muscles, nerves, or glands. The spread of these
            signals in your brain can make you lose consciousness and have
            severe muscle contractions.
          </p>
        </section>
      </section>

      <h2 className='aurulh2'>Common symptoms of "Aurul Phase"</h2>
      <img className='stages' src={Stages} alt='stages of a seizure' />

      <section className='aurul'>
        <div className='triple'>
          <h4>Changes in your Thoughts and Feelings:</h4>

          <ul>
            <li>Strange, negative, or scary feelings, like fear or panic</li>
            <li>Pleasant feelings</li>
            <li>Racing thoughts</li>
            <li>
              Déjà vu (a feeling that you have been somewhere before when you
              haven’t)
            </li>
            <li>
              Jamais vu (a feeling that something is unfamiliar even though it
              isn’t)
            </li>
            <li>Thinking that your body parts feel or look different</li>
            <li>Out of body sensation</li>
          </ul>
        </div>

        <div className='triple'>
          <h4>Changes in your Body:</h4>
          <ul>
            <li>Fluctuating body temperature (Hot, cold, sweaty) </li>
            <li>Looking pale or flushed</li>
            <li>Heart racing</li>
            <li>Feeling dizzy or lightheaded</li>
            <li>Nausea (feeling like you might throw up) </li>
            <li>
              Other feelings in your stomach (like a rising feeling from your
              stomach to your throat)
            </li>
          </ul>
        </div>

        <div className='triple'>
          <h4>Changes in your Senses:</h4>
          <ul>
            <li>Headache or pain in the body</li>
            <li>
              Numbness, tingling, or shock/spasm in a random part of your body
            </li>
            <li>Unusual smells, sounds, or tastes</li>
            <li>Vision loss, blurry vision</li>
            <li>Seeing flashing lights or things that are not really there</li>
            <li>Hearing loss or temporary deafness</li>
            <li>Hearing strange or different sounds</li>
            <li>
              Unusual tastes or smells (for example, a bad smell like burning
              rubber)
            </li>
          </ul>
        </div>
      </section>

      <div className='ictalP'>
        <p>
          The middle of a seizure is called the "ictal phase." At this phase,
          visible symptoms of the seizure begin (including the aura if you have
          one) to when the seizure activity in your brain stops. You may
          continue experiencing some symptoms even after the seizure activity in
          your brain has stopped. This is because some symptoms are
          after-effects of a seizure, like sleepiness, confusion, certain
          movements or being unable to move, and difficulty talking or thinking
          normally.
        </p>
      </div>

      <br />

      <h2 className='ictalH'>Common symptoms of "Ictal Phase"</h2>
      <section className='forIctal'>
        <div className='combined'>
          <div className='triple'>
            <h4>Changes in your Thoughts and Awareness:</h4>

            <ul>
              <li>Blacking out (losing awareness) </li>
              <li>Passing out (losing consciousness, being unconscious)</li>
              <li>Feeling detached, confused, or spaced out</li>
              <li>Forgetting things (memory lapses)</li>
              <li>Feeling distracted, or daydreaming</li>
            </ul>
          </div>

          <div className='triple'>
            <h4 class='move'>Changes in the Speech:</h4>
            <ul>
              <li>Muteness or can’t get get words out</li>
              <li>Making nonsense or garbled sounds</li>
              <li>
                Saying things that don’t make sense to what is going on around
                you.
              </li>
            </ul>
          </div>

          <div className='triple'>
            <h4>Problems with your Eyes:</h4>

            <ul>
              <li>Blinking a lot</li>
              <li>Looking up or to one side</li>
              <li>Staring</li>
              <li>Pupils dilate (appear larger than normal)</li>
            </ul>
          </div>
        </div>

        <div className='triple double'>
          <h4>Changes with your Muscles</h4>

          <li>
            Your muscles may become very rigid (stiff), tense, or lock. This
            ranges from your whole body to just one muscle group. If you are
            standing, you may fall "like a tree trunk."
          </li>
          <li>
            Your muscles may become very limp. This is called "low muscle tone."
            You may not be able to move, your neck and head may drop forward,
            which can cause you to slump or fall forward. This as well can range
            in effect to your whole body or one muscle group.
          </li>
          <li>
            You may have tremors (shaking movements), twitching or jerking
            movements that you are uncontrollable. This could happen on one or
            both sides of your face, arms, legs or your whole body. It could
            start in one area and then spread to other areas, or it could stay
            in one place.
          </li>
          <h5 className='you5'>
            You may have something called repeated non-purposeful movements, or
            "automatisms," in your face, arms, or legs. Some examples of these
            are:
          </h5>

          <ul>
            <li>Lip-smacking or chewing movements</li>
            <li>
              Repeated movements of hands, like wringing your hands, playing
              with buttons or objects in your hands, or waving
            </li>
            <li>Dressing or undressing</li>
            <li>Walking or running</li>
          </ul>

          <li>
            If you were performing an activity prior to the seizure beginning,
            your body may continue that same action . This is called repeated
            purposeful movement.
          </li>
          <li>
            You may have a specific sequence of movements called a convulsion.
            In a convulsion, you lose consciousness, your body becomes rigid or
            tense, and then you have fast jerking movements.
          </li>
        </div>

        <div className='triple double'>
          <h4>
            Other Changes in your Body (Usually seen with Tonic Clonic Seizures)
          </h4>
          <ul>
            <li>May have changes in breathing</li>
            <li>Drooling</li>
            <li>Not being able to swallow</li>
            <li>
              Biting your tongue (this may happen when your muscles tighten and
              it makes your teeth clench together)
            </li>
            <li>Losing control of your bladder or bowels</li>
          </ul>
        </div>
      </section>

      <p className='anotherP'>
        As a seizure concludes, some people recover immediately, while others
        may have a prolonged recovery, placing them in a sort of "limbo" state
        of mind until they feel normal again. The recovery period varies,
        depending on the type of seizure and what part of the brain was
        affected. The recovery period after a seizure is called the "postictal
        phase."
      </p>

      <h2 className='post'>Common Symptoms in "Postictal Phase"</h2>

      <img className='eeg' src={eeg} alt='Electroencephalogram (EEG)' />

      <section className='postictal'>
        <div className='twins'>
          <h4>Changes in your Thoughts and Feelings:</h4>

          {/* <ul> */}
          <li>
            Being slow to respond, or not being able to respond right away, when
            someone talks to you
          </li>
          <li>Forgetting things (memory loss)</li>
          <li>Having a hard time talking or writing</li>
          <li>Feeling "fuzzy"</li>
          <li>Feeling depressed, sad, or upset</li>
          <li>Feeling scared, confused, or anxious</li>
          <li>Feeling frustrated, embarrassed or ashamed</li>
          {/* </ul> */}
        </div>

        <div className='twins'>
          <h4>Changes in your Body:</h4>
          {/* <ul> */}
          <li>Feeling dizzy or lightheaded</li>
          <li>Headache or other types of pain</li>
          <li>Nausea or upset stomach</li>
          <li>Feeling thirsty</li>
          <li>Feeling weak (maybe only in one part or side of your body)</li>
          <li>
            Feeling like you need to go to the bathroom, or losing control of
            your bowels or bladder
          </li>
          <li>Wanting to sleep or feeling tired</li>
          <li>
            If you fell during your seizure, you may have injuries, like
            bruises, cuts, broken bones or a head injury.
          </li>
          {/* </ul> */}
        </div>
      </section>

      <footer>
        <h2 className='solution'>Solution</h2>

        <div className='solPhotos'>
          <img
            className='rnsdata'
            src={rnsdata}
            alt='RNS Data over the years'
          />
          <img
            className='rnstreat'
            src={RnsTreatment}
            alt='Rns System: A smart device to treat drug-resistant epilepsy'
          />
        </div>

        <p className='rnsP'>
          The RNS System is the world’s first and only closed loop
          brain-responsive neurostimulation system designed to prevent epileptic
          seizures at their source. A closed-loop system receives continuous
          feedback from the patient’s brain by a programmed algorithm and tends
          to be an effective stimulation parameter adjustment. As a type of
          brain-computer interface, the RNS System treats seizures by
          continuously monitoring brain waves, recognizing each patient’s unique
          "seizure onset fingerprint," and automatically responding with
          imperceptible electrical pulses before seizures occur. The RNS System
          is composed of a neurostimulator, leads "wires" that are placed at the
          area seizures originate, a remote monitor used by patients to upload
          their data, and a RNS Tablet and Patient Data Management System used
          by physicians. Physicians can remotely view their patient’s
          electrographic data on a secure website, and program the device
          settings to personalize therapy for each individual’s unique brain
          patterns. When the patients receive their remote monitor, they use a
          scanning device to scan the area on their head the device was planted
          so that it uploads and gets sent over to the physician. Every couple
          months, the patient shows up to the physician so that the device can
          be properly adjusted or calibrated to meet the frequencies of the
          seizures occurring. Doing this effectively helps improve, stop, or
          lower the occurrences of seizures with the patient.
        </p>

        <br />

        <ReactPlayer
          className='video'
          url='https://www.youtube.com/watch?v=2ucaD7sqZa4&fbclid=IwAR3AJdu3AxA4CFtVvxdTympy25puxGp__ogq2imbksFfs4oNQgkWJ1ipTNI'
        />

        <h2 className='thoughts'>My Thoughts on Improving this Device</h2>

        <p className='last'>
          This is a wonderful device and helps so many people in need of it.
          There are ways that this device could improve in the future. One major
          way would be when scanning the RNS device to pick up data for it to be
          adjusted is that an AI made that reads the data 24/7 and self-adjusts
          the device itself, choosing itself the best ways to improve while
          having a physician watching the data making sure the choices are
          correct. This would decrease the time and adjustments needed for the
          RNS device to really do what it was made to do, and these times could
          take years to meet the perfect frequency, now compare that to pretty
          much having the physician with you every day changing it, that would
          give it a dramatic change.
        </p>
      </footer>
    </div>
  )
}

export default MainPage
