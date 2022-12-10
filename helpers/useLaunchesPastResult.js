import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query GetLaunchesPastResult($limit: Int!) {
    launchesPastResult(limit: $limit) {
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

const useLaunchesPastResult = (page) => {
  const { loading, error, data } = useQuery(QUERY, {
    variables: {
      limit: 4 * page,
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
