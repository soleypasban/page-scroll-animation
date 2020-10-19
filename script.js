window.addEventListener(
    "scroll",
    () => {
      const percent =
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      document.body.style.setProperty("--scroll", 1 * percent);
      console.log(percent);
    },
    false
  );