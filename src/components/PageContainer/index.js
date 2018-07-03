import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: ${({ isRoot }) => !isRoot && "0px 20% 20%"};
`;

export default PageContainer;
