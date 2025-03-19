import MenuBar from '../component/MenuBar';

export default function Articles() {
  const articles = [
    'how belief works with cyborg',
    'stupid question about creatures',
    'Thailand conspiracy',
    'The good place series review',
    'open source genomics',
    'Evoluvent',
    'moving plant',
  ];

  return (
    <>
      <MenuBar />
      <div style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Articles</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '2px solid #475D00', textAlign: 'left', padding: '0.5rem' }}>Title</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((title, index) => (
              <tr key={index}>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #475D00' }}>{title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
