"use client";
import React from "react";
import styles from "./Dashboard.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <section className={styles.searchSection}>
        <h2 className={styles.sectionTitle}>BROWSE</h2>
        <div className={styles.searchBox}>
          <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/f3e14de49b89c98d303bab9db76d991484b2a3f5?placeholderIfAbsent=true" alt="Search" className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>
      </section>

      <section className={styles.filterSection}>
        <div className={styles.filterHeader}>
          <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/2b5b4eb4ea7b33b2b8d3cdf8d69a708af21e2c5c?placeholderIfAbsent=true" alt="Filter" className={styles.filterIcon} />
          <h3 className={styles.filterTitle}>FILTERS</h3>
        </div>

        <div className={styles.filterGroup}>
          <h4 className={styles.filterGroupTitle}>Field</h4>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} />
            <span>Nursing</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} checked />
            <span>Engineering</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} />
            <span>Computer Science</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} checked />
            <span>MultiMedia</span>
          </label>
        </div>

        <div className={styles.filterGroup}>
          <h4 className={styles.filterGroupTitle}>Skills</h4>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} checked />
            <span>Communication</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} />
            <span>Problem Solving</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} checked />
            <span>Research & Writing</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} />
            <span>MS Office</span>
          </label>
        </div>

        <div className={styles.filterGroup}>
          <h4 className={styles.filterGroupTitle}>Rating</h4>
          <div className={styles.ratingOptions}>
            <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/1167d802205154a23ab911ea93a34352b59ee0db?placeholderIfAbsent=true" alt="5 stars" className={styles.ratingImage} />
            <div className={styles.ratingOption}>
              <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/97c0b19d7a942b7463cbf3b69250514003aee1a7?placeholderIfAbsent=true" alt="4 stars" className={styles.ratingImage} />
              <span>from 4 stars</span>
            </div>
            <div className={styles.ratingOption}>
              <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/58a5742c92617b895d0a0c40b83641f9105e11ad?placeholderIfAbsent=true" alt="3 stars" className={styles.ratingImage} />
              <span>from 3 stars</span>
            </div>
            <div className={styles.ratingOption}>
              <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/1f9d240f550cfb19e9002c600978d7e998c5170b?placeholderIfAbsent=true" alt="2 stars" className={styles.ratingImage} />
              <span>from 2 stars</span>
            </div>
            <div className={styles.ratingOption}>
              <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/38bfc3bba3a2558035548c9c4d437da977405bf5?placeholderIfAbsent=true" alt="1 star" className={styles.ratingImage} />
              <span>from 1 star</span>
            </div>
          </div>
        </div>

        <button className={styles.clearButton}>Clear All</button>
      </section>
    </aside>
  );
};

export default Sidebar;
