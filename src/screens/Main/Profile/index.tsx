import React from "react";
import { Text, View } from "react-native";

import Header from "./Header";
import Info from "./Info";

import Layout from "../../../components/Layout";

const Profile = () => {
  return (
    <Layout>
      <Header />
      <Info />
    </Layout>
  );
};

export default Profile;
