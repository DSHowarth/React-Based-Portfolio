export default function ErrorMessage() {
    return(
        <>
            <h1>There is Nothing Here</h1>
            <p> There are only a few viable paths for this website. {window.location.pathname} isn't one of them.</p>
            <a href="https://dstanleyhowarth.netlify.app/">Please click here to return to the home page</a>
        </>
    )
}