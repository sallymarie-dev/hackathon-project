export default function Title({ data }) {
    return (
        <>
            <h1>Title</h1>
            <p>Select a Title</p>
            <h3>{data[5].Title}</h3>
        </>
    )
}