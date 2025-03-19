import MenuBar from './component/MenuBar';

export default function Home() {
  return (
    <>
      <MenuBar />
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          Hi, This is Ami's first website
        </h1>
        <p style={{ fontSize: '1.2rem' }}>
          Heading to the brighter world
        </p>
      </div>
    </>
  );
}
