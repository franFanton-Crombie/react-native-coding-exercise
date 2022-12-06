import { gql } from "@apollo/client";

const useLaunchesPastResult = () => {
  const GET_LAUNCHES = gql`
    query getLaunchesPastResult {
      launchesPastResult(limit: 10) {
        data {
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
          }
          mission_name
          rocket {
            first_stage {
              cores {
                core {
                  reuse_count
                  status
                }
                flight
              }
            }
            rocket_name
            second_stage {
              payloads {
                payload_mass_kg
                payload_mass_lbs
                payload_type
              }
            }
          }
          ships {
            home_port
            image
            name
          }
        }
      }
    }
  `;
  return GET_LAUNCHES;
};

export default useLaunchesPastResult;
