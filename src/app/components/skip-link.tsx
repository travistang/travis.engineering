import classNames from "classnames";

/*
  This is a component that provides a skip link to the main content of the page to improve accessibility. This is normally not visible on the page, but will be focused when the user presses the tab key.
*/
export const SkipLink = () => {
  return (
    <a
      tabIndex={1}
      href="#main-content"
      className={classNames(
        "absolute top-0 left-0 z-50 p-2 bg-white dark:bg-slate dark:text-white",
        "transition-transform duration-300 transform -translate-x-full",
        "focus:translate-x-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      )}
    >
      Skip to main content
    </a>
  );
};
