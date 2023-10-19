import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";
import MyNavbar from "./tugas/MyNavbar";
import MyFooter from "./tugas/MyFooter";

export default class Komponen extends React.Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <ClassComponent nama="Nurhalim Habibie" />
        <FunctionalComponent nama="Nurhalim Habibie" />
        <MyFooter />
      </div>
    );
  }
}
