import MenuBar from '../component/MenuBar';

export default function AboutMe() {
  return (
    <>
      <MenuBar />
      <div style={{ display: 'flex', alignItems: 'center', padding: '2rem' }}>
        {/* Image Section */}
        <div style={{ flex: '0 0 150px', marginRight: '2rem' }}>
          <img 
            src="/ami.png" 
            alt="Ami" 
            style={{ width: '100%', borderRadius: '50%' }} /* Circular style */
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
