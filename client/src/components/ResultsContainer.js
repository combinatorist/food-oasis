import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import ResultsFilters from "./ResultsFilters";
import ResultsList from "./ResultsList";
import ResultsMap from "./ResultsMap";

const useStyles = makeStyles(theme => ({
  filterButton: {
    margin: "0 .25rem",
    padding: "0 0.5rem",
    fontSize: "12px"
  },
  div: {
    textAlign: "center",
    fontSize: "12px",
    border: "1px solid blue"
  },
  container: {
    display: "flex",
    flexDirection: "column"
  },
  list: {
    textAlign: "center",
    fontSize: "12px",
    border: "1px solid blue"
  },
  map: {
    textAlign: "center",
    fontSize: "12px",
    border: "1px solid blue"
  }
}));

export default function ResultsContainer(
  {
    // TODO: stub out the props coming in
  }
) {
  const classes = useStyles();
  /**
   * ***PLAN!***
   *
   * get the initial search params from the query string
   *
   * pass query string params down to ResultsFilters as props
   * pass function down to search filter to update qs-params??
   *     maybe this is already handled by useStakeholders?? should it be????
   *
   * pass stakeholders array down to map and list components
   *
   * hold 'selected stakeholder' in local state
   */

  return (
    <div className={classes.container}>
      <ResultsFilters
      /**
       * distance: PropTypes.number,
       * placeName: PropTypes.string,
       * isPantryCategorySelected: PropTypes.bool,
       * isMealCategorySelected: PropTypes.bool,
       * isVerifiedFilterSelected: PropTypes.bool,
       */
      />
      <Grid container wrap="wrap-reverse">
        <Grid item xs={12} md={4} className={classes.list}>
          <ResultsList
          // selectedStakeholder={selectedStakeholder}
          // stakeholders={stakeholders}
          />
        </Grid>
        <Grid item xs={12} md={8} className={classes.map}>
          <ResultsMap
          // selectedStakeholder={selectedStakeholder}
          // stakeholders={stakeholders}
          // selectedLatitude={selectedLatitude}
          // selectedLongitude={selectedLongitude}
          /**
           * selectedLatitude: PropTypes.number,
           * selectedLongitude: PropTypes.number,
           * selectedStakeholder: PropTypes.object,
           * stakeholders: PropTypes.arrayOf(PropTypes.object)
           */
          />
        </Grid>
      </Grid>
    </div>
  );
}
