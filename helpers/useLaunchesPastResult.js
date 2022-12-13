import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query GetLaunchesPastResult($limit: Int!, $sort: String!, $order: String!) {
    launchesPastResult(limit: $limit, sort: $sort, order: $order) {
      data {
        id
        mission_name
        rocket {
          rocket_name
          rocket_type
        }
        launch_year
      }
      result {
        totalCount
      }
    }
  }
`;

const useLaunchesPastResult = (page, sortKey, orderKey) => {
  const { loading, error, data, client } = useQuery(QUERY, {
    variables: {
      limit: 4 * page,
      sort: sortKey,
      order: orderKey,
    },
  });
  client.cache.reset();
  return {
    data: data?.launchesPastResult?.data,
    result: data?.launchesPastResult?.result,
    loading: loading,
  };
};

export default useLaunchesPastResult;
