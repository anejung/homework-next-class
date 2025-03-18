import MenuBar from '../component/MenuBar';


export default function AboutMe() {
  return (
    <><MenuBar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold text-purple-600">About Me Page</h1>
        <p className="mt-4 text-lg text-gray-700">This is the About Me page. Learn more about who I am here!</p>
      </main>
    </>
  );
}

