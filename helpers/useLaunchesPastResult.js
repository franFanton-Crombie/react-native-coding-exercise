import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query GetLaunchesPastResult($limit: Int!, $sort: String!) {
    launchesPastResult(limit: $limit, sort: $sort) {
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

const useLaunchesPastResult = (page, sortKey) => {
  const { loading, error, data } = useQuery(QUERY, {
    variables: {
      limit: 4 * page,
      sort: sortKey,
    },
  });

  const vector = data?.launchesPastResult?.data
    .slice()
    .sort(
      (a, b) => a.mission_name.toLowerCase() > b.mission_name.toLowerCase()
    );

  return {
    data: vector,
    result: data?.launchesPastResult?.result,
    loading: loading,
  };
};

export default useLaunchesPastResult;
