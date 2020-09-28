const license_list = [
  { name: 'C (car licence)', type: 'driving_license', value: 'dl_C', disabled: false },
  { name: 'R (rider license)', type: 'driving_license', value: 'dl_R', disabled: false },
  { name: 'RE (restricted rider license)', type: 'driving_license', value: 'dl_RE', disabled: false },
  { name: 'LR (light rigid licence)', type: 'driving_license', value: 'dl_LR', disabled: false },
  { name: 'MR (medium rigid licence)', type: 'driving_license', value: 'dl_MR', disabled: false },
  { name: 'HR (heavy rigid licence)', type: 'driving_license', value: 'dl_HR', disabled: false },
  { name: 'HC (heavy combination licence)', type: 'driving_license', value: 'dl_HC', disabled: false },
  { name: 'MC (multi combination licence)', type: 'driving_license', value: 'dl_MC', disabled: false },

  { name: 'CB (bridge and gantry crane)', type: 'cranes', value: 'cl_CB', disabled: false },
  { name: 'CD (derrick crane)', type: 'cranes', value: 'cl_CD', disabled: false },
  { name: 'CN (non slewing mobile crane)', type: 'cranes', value: 'cl_CN', disabled: false },
  { name: 'CP (portal boom crane)', type: 'cranes', value: 'CP', disabled: false },
  { name: 'CS (self erecting tower crane)', type: 'cranes', value: 'cl_CS', disabled: false },
  { name: 'C2 (up to 20 tonnes)', type: 'cranes', value: 'cl_C2', disabled: false },
  { name: 'C6 (up to 60 tonnes)', type: 'cranes', value: 'cl_C6', disabled: false },
  { name: 'C1 (up to 100 tonnes)', type: 'cranes', value: 'cl_C1', disabled: false },
  { name: 'CO (over 100 tonnes)', type: 'cranes', value: 'cl_CO', disabled: false },
  { name: 'CT (tower cranes)', type: 'cranes', value: 'cl_CT', disabled: false },
  { name: 'CV (vehicle loading crane)', type: 'cranes', value: 'cl_CV', disabled: false },
  { name: 'PB (concrete placing booms)', type: 'cranes', value: 'cl_PB', disabled: false },

  { name: 'DG (dogging)', type: 'high_risk_work', value: 'hrw_DG', disabled: false },
  { name: 'RB (basic rigging)', type: 'high_risk_work', value: 'hrw_RB', disabled: false },
  { name: 'RI (intermediate rigging)', type: 'high_risk_work', value: 'hrw_RI', disabled: false },
  { name: 'RA (advanced rigging)', type: 'high_risk_work', value: 'hrw_RA', disabled: false },

  { name: 'SB (basic scaffolding)', type: 'high_risk_work', value: 'hrw_SB', disabled: false },
  { name: 'SI (intermediate scaffolding)', type: 'high_risk_work', value: 'hrw_SI', disabled: false },
  { name: 'SA (advanced scaffolding)', type: 'high_risk_work', value: 'hrw_SA', disabled: false },

  { name: 'CT (tower cranes)', type: 'high_risk_work', value: 'hrw_CT', disabled: false },
  { name: 'CS (self erecting tower crane)', type: 'high_risk_work', value: 'hrw_CS', disabled: false },
  { name: 'CD (derrick cranes)', type: 'high_risk_work', value: 'hrw_CD', disabled: false },
  { name: 'CP (portal boom cranes)', type: 'high_risk_work', value: 'hrw_CP', disabled: false },
  { name: 'CB (bridge and gantry cranes)', type: 'high_risk_work', value: 'hrw_CB', disabled: false },
  { name: 'CV (10 metre tonnes or greater VLC)', type: 'high_risk_work', value: 'hrw_CV', disabled: false },
  { name: 'CN (non-slewing mobile cranes)', type: 'high_risk_work', value: 'hrw_CN', disabled: false },
  { name: 'C2 (includes CN and CV)', type: 'high_risk_work', value: 'hrw_C2', disabled: false },
  { name: 'C6 (includes C2, CN and CV)', type: 'high_risk_work', value: 'hrw_C6', disabled: false },
  { name: 'C1 (includes C6, C2, CN and CV)', type: 'high_risk_work', value: 'hrw_C1', disabled: false },
  { name: 'CO (includes C1, C6, C2, CN and CV)', type: 'high_risk_work', value: 'hrw_CO', disabled: false },
  { name: 'WP (boom length 11 metres or greater)', type: 'high_risk_work', value: 'hrw_WP', disabled: false },
  { name: 'HM (cantilever platforms)', type: 'high_risk_work', value: 'hrw_HM', disabled: false },
  { name: 'HP (personnel and materials includes HM)', type: 'high_risk_work', value: 'hrw_HP', disabled: false },
  { name: 'PB (Concrete placing booms)', type: 'high_risk_work', value: 'hrw_PB', disabled: false },

  { name: 'BB (basic boiler operation)', type: 'high_risk_work', value: 'hrw_BB', disabled: false },
  { name: 'BI (intermediate boiler operation)', type: 'high_risk_work', value: 'hrw_BI', disabled: false },
  { name: 'BA (advanced boiler operation)', type: 'high_risk_work', value: 'hrw_BA', disabled: false },
  { name: 'TO (steam turbine operation)', type: 'high_risk_work', value: 'hrw_TO', disabled: false },
  { name: 'ES (reciprocating steam engine operation)', type: 'high_risk_work', value: 'hrw_ES', disabled: false },

  { name: 'LF (fork-lift truck)', type: 'high_risk_work', value: 'hrw_LF', disabled: false },
  { name: 'LO (order-picking fork-lift truck)', type: 'high_risk_work', value: 'hrw_LO', disabled: false },

];
export default license_list;

// import license_list from "static/license_list";
// https://www.qld.gov.au/transport/licensing/driver-licensing/types
// https://www.commerce.wa.gov.au/worksafe/high-risk-work-classes-licence
// https://www.safework.nsw.gov.au/licences-and-registrations/licences/high-risk-work-licences/hrw_accordions/crane-licences
