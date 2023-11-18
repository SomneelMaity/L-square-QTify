import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/Search.svg";
import styles from "./Search.module.css";
function Search({ placeholder }) {
  return (
    <>
      <form className={styles.wrapper}>
        <input className={styles.search} placeholder={placeholder} required />
        <button className={styles.button} type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
}

export default Search;
