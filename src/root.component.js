// import style from "./navbar.module.scss";

export default function Root(props) {
  console.log();
  return (
    <>
      <section>{props.name} is mounted! Vorseek app</section>
      <button
        type="button"
        onClick={() => {
          props.singleSpa.navigateToUrl("/app");
        }}
      >
        Go to URL 'APP'
      </button>
    </>
  );
}
