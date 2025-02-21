export default function Response({ data }) {
    return (
      <div className="response">
        <h2>Response</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
  