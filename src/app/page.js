import MenuBar from './component/MenuBar';
// import DogCard from "@/components/DogCard";


export default function Home() {
  return null
  return (

    <>
      <MenuBar />
      <div style={{ textAlign: 'center', padding: '2rem' }}>
      
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          {/* Hi, This is Ami's first website */}
        </h1>
        <p style={{ fontSize: '1.2rem' }}>
          Heading to the brighter world
        </p>
        {/* <header>
          main content
          <main className="flex flex-col gap-[16px]">
            <DogCard name="ชิบะ" description="หมาญี่" />
            
          </main>
        </header> */}
      </div>
    </>
  );
}
