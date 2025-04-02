import MenuBar from '../component/MenuBar';
import Image from 'next/image';



export default function AboutMe() {
  return (
    <>
      <MenuBar />
      <div style={{ display: 'flex', alignItems: 'center', padding: '2rem' }}>
        {/* Image Section */}
        <div style={{ flex: '0 0 150px', marginRight: '2rem' }}>
          <Image 
            src="/ami.png" 
            alt="Ami" 
            width={150}
            height={150}
            style={{ borderRadius: '50%' }}
          />
        </div>

        {/* Text Section */}
        <div>
          <p style={{ fontSize: '1.5rem', fontWeight: 'normal', color: '#475D00' }}>
            let me sleep first, explain myself later
          </p>
        </div>
      </div>
    </>
  );
}
