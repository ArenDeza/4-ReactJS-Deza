// this page is displayed in case of 'page not found' error
import Header from "../components/Header";

function NoPage() {
  return (
    <>
      <Header/>
      <div className="no-page-div">
        <h2>Error 404: page not found D:</h2>
        <a href=".">go back to the previous page</a>
      </div>
    </>
  );
}

export default NoPage;
