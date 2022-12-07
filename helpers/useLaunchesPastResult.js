import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import { useState } from "react";

const useLaunchesPastResult = () => {
  //const { loading, error, data } = useQuery(query);
  const [data, setData] = useState({});
  //console.log(error);
  /*data?.dogs.map((item) => {
    console.log(item.name);
  });*/
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql",
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: gql`
        query GetLaunchesPastResult {
          launchesPastResult(limit: 4) {
            data {
              launch_date_local
              mission_name
            }
            result {
              totalCount
            }
          }
        }
      `,
    })
    .then((result) => {
      setData(result.data.launchesPastResult);
    });

  return { data: data };
};

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;
const query = gql`
  query GetLaunchesPastResult {
    launchesPastResult(limit: 1) {
      data {
        launch_date_local
        mission_name
      }
      result {
        totalCount
      }
    }
  }
`;

export default useLaunchesPastResult;
