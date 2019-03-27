const DATA = [
  {
    firstName: 'Serious',
    lastName: 'Injury',
    acc__earner: [
      ['ETERNITY', false]
    ],
    acc_sched_1__loe_more_than_lope: [
      ['ETERNITY', false]
    ],
    acc_part_2__suffered_personal_injury: [
      ['ETERNITY', true]
    ],
    acc_part_3__has_lodged_claim: [
      ['ETERNITY', true]
    ],
    acc_sched_1__incapacitated_for_6_months: [
      ['ETERNITY', true]
    ],
    date_of_birth: [
      ['ETERNITY', '2000-01-01']
    ],
    date_of_injury: [
      ['ETERNITY', '2000-01-01']
    ],
    finish_date_of_full_time_study_training_bridging_18th_birthday: [
      ['ETERNITY', '2000-01-01']
    ],
    incapacity_for_employment__corporation_determination: [
      ['2000-01-01', true]
    ],
    incapacity_for_employment__by_covered_injury: [
      ['ETERNITY', true]
    ],
    acc_sched_1__weekly_earnings: [
      ['2018-08-05', 0]
    ],
    acc__has_cover: [
      ['2000-01-01', true]
    ],
    acc_sched_1__engaged_fulltime_study_or_training: [
      ['2000-01-01', false]
    ],
    // Output
    acc__potential_earner: [
      ['2020-08-06', null],
      ['2021-08-06', null],
      ['2022-08-06', null],
      ['2023-08-06', null],
      ['2024-08-06', null]
    ],
    acc_sched_1__lope_eligible: [
      ['2020-09-06', null],
      ['2021-09-06', null],
      ['2022-09-06', null],
      ['2023-09-06', null],
      ['2024-09-06', null]
    ],
    acc_sched_1__lope_weekly_compensation: [
      ['2020-09-06', null],
      ['2021-09-06', null],
      ['2022-09-06', null],
      ['2023-09-06', null],
      ['2024-09-06', null]
    ],
    age: [
      ['2020-08-06', null]
    ],
  },
  // Incapacity began at 25 (2025-06-01), not eligible on 2025-09-01, eligible in 2026-01-02 
  {
    firstName: 'Sensitive',
    lastName: 'Claiment',
    acc__earner: [
      ['ETERNITY', false]
    ],
    acc_sched_1__loe_more_than_lope: [
      ['ETERNITY', false ],
    ],
    acc_part_2__suffered_personal_injury: [
      ['ETERNITY', true]
    ],
    acc_part_3__has_lodged_claim: [
      ['ETERNITY', true]
    ],
    acc_sched_1__incapacitated_for_6_months: [
      ['ETERNITY', true]
    ],
    date_of_birth: [
      ['ETERNITY', '2000-02-02']
    ],
    date_of_injury: [
      ['ETERNITY', '2014-05-05']
    ],
    finish_date_of_full_time_study_training_bridging_18th_birthday: [
      ['ETERNITY', '2015-05-05']
    ],
    incapacity_for_employment__by_covered_injury: [
      ['ETERNITY', true]
    ],
    acc_sched_1__weekly_earnings: [
      ['2021-09-06', 0]
    ],
    acc__has_cover: [
      ['2018-08-03', true]
    ],
    acc_sched_1__engaged_fulltime_study_or_training: [
      ['2006-08-03', false]
    ],
    incapacity_for_employment__corporation_determination: [
      ['2018-08-03', true]
    ],
    // Output
    acc__potential_earner: [
      ['2020-09-06', null]
    ],
    acc_sched_1__lope_eligible: [
      ['2020-09-06', null],
      ['2021-09-06', null],
      ['2022-09-06', null],
      ['2023-09-06', null],
      ['2024-09-06', null]
    ],
    age: [
      ['2020-09-06', null]
    ],
    acc_sched_1__lope_weekly_compensation: [
      ['2020-09-06', null],
      ['2021-09-06', null],
      ['2022-09-06', null],
      ['2023-09-06', null],
      ['2024-09-06', null]
    ]
  },
  {
    firstName: 'Sensitive',
    lastName: 'Claiment 2',
    acc__earner: [
      ['ETERNITY', true]
    ],
    acc_sched_1__loe_more_than_lope: [
      ['ETERNITY', true ],
    ],
    acc_part_2__suffered_personal_injury: [
      ['ETERNITY', true]
    ],
    acc_part_3__has_lodged_claim: [
      ['ETERNITY', true]
    ],
    acc_sched_1__incapacitated_for_6_months: [
      ['ETERNITY', true]
    ],
    date_of_birth: [
      ['ETERNITY', '2000-02-02']
    ],
    date_of_injury: [
      ['ETERNITY', '2014-05-05']
    ],
    finish_date_of_full_time_study_training_bridging_18th_birthday: [
      ['ETERNITY', '2015-05-05']
    ],
    incapacity_for_employment__by_covered_injury: [
      ['ETERNITY', true]
    ],
    acc_sched_1__weekly_earnings: [
      ['2021-09-06', 0]
    ],
    acc__has_cover: [
      ['2018-08-03', true]
    ],
    acc_sched_1__engaged_fulltime_study_or_training: [
      ['2006-08-03', false]
    ],
    incapacity_for_employment__corporation_determination: [
      ['2018-08-03', true]
    ],
    // Output
    acc__potential_earner: [
      ['2020-09-06', null]
    ],
    acc_sched_1__lope_eligible: [
      ['2020-09-06', null],
      ['2021-09-06', null],
      ['2022-09-06', null],
      ['2023-09-06', null],
      ['2024-09-06', null]
    ],
    age: [
      ['2020-09-06', null]
    ],
    acc_sched_1__lope_weekly_compensation: [
      ['2020-09-06', null],
      ['2021-09-06', null],
      ['2022-09-06', null],
      ['2023-09-06', null],
      ['2024-09-06', null]
    ]
  },
  {
    // Test LOPE for person in last day of continuous training since their 18th birthday
    firstName: 'Luke',
    lastName: '',
    acc__earner: [
      ['ETERNITY', true]
    ],
    acc_sched_1__loe_more_than_lope: [
      ['ETERNITY', true]
    ],
    acc_part_2__suffered_personal_injury: [
      ['ETERNITY', true]
    ],
    acc_part_3__has_lodged_claim: [
      ['ETERNITY', true]
    ],
    acc_sched_1__incapacitated_for_6_months: [
      ['ETERNITY', true]
    ],
    date_of_birth: [
      ['ETERNITY', '2002-08-03']
    ],
    date_of_injury: [
      ['ETERNITY', '2020-08-05']
    ],
    finish_date_of_full_time_study_training_bridging_18th_birthday: [
      ['ETERNITY', '2020-08-05']
    ],
    incapacity_for_employment__corporation_determination: [
      ['2018-08-03', true]
    ],
    incapacity_for_employment__by_covered_injury: [
      ['ETERNITY', true]
    ],
    acc_sched_1__weekly_earnings: [
      ['2018-08-05', 500]
    ],
    acc__has_cover: [
      ['2018-08-05', true]
    ],
    acc_sched_1__engaged_fulltime_study_or_training: [
      ['2018-08-05', false]
    ],
    // Output
    acc__potential_earner: [
      ['2020-08-06', null],
      ['2021-08-06', null],
      ['2022-08-06', null],
      ['2023-08-06', null],
      ['2024-08-06', null]
    ],
    acc_sched_1__lope_eligible: [
      ['2020-09-06', null],
      ['2021-09-06', null],
      ['2022-09-06', null],
      ['2023-09-06', null],
      ['2024-09-06', null]
    ],
    age: [
      ['2020-08-06', null]
    ],
  },
  // Test LOPE for person injured day after their last day of continuous training since their 18th birthday
  {
    firstName: 'Sen',
    lastName: 'Try',
    acc__earner: [
      ['ETERNITY', false]
    ],
    acc_sched_1__loe_more_than_lope: [
      ['ETERNITY', true]
    ],
    acc_part_2__suffered_personal_injury: [
      ['ETERNITY', true]
    ],
    acc_part_3__has_lodged_claim: [
      ['ETERNITY', true]
    ],
    acc_sched_1__incapacitated_for_6_months: [
      ['ETERNITY', true]
    ],
    date_of_birth: [
      ['ETERNITY', '2002-08-03']
    ],
    date_of_injury: [
      ['ETERNITY', '2001-08-06']
    ],
    finish_date_of_full_time_study_training_bridging_18th_birthday: [
      ['ETERNITY', '2021-08-06']
    ],
    incapacity_for_employment__by_covered_injury: [
      ['ETERNITY', true]
    ],
    acc_sched_1__weekly_earnings: [
      ['2021-09-06', 500]
    ],
    acc__has_cover: [
      ['2018-08-03', true]
    ],
    acc_sched_1__engaged_fulltime_study_or_training: [
      ['2006-08-03', false]
    ],
    incapacity_for_employment__corporation_determination: [
      ['2018-08-03', true]
    ],
    // Output
    acc__potential_earner: [
      ['2020-09-06', null]
    ],
    acc_sched_1__lope_eligible: [
      ['2020-09-06', null],
      ['2021-09-06', null],
      ['2022-09-06', null],
      ['2023-09-06', null],
      ['2024-09-06', null]
    ],
    age: [
      ['2020-09-06', null]
    ],
    acc_sched_1__lope_weekly_compensation: [
      ['2020-09-06', null],
      ['2021-09-06', null],
      ['2022-09-06', null],
      ['2023-09-06', null],
      ['2024-09-06', null]
    ]
  },
  // Simple test for LOPE eligibility for person before and after their 18th birthday
  {
    firstName: 'Fox',
    lastName: '',
    acc__earner: [
      ['ETERNITY', false]
    ],
    acc_sched_1__loe_more_than_lope: [
      ['ETERNITY', true]
    ],
    acc_part_2__suffered_personal_injury: [
      ['ETERNITY', true]
    ],
    acc_part_3__has_lodged_claim: [
      ['ETERNITY', true]
    ],
    acc_sched_1__incapacitated_for_6_months: [
      ['ETERNITY', true]
    ],
    date_of_birth: [
      ['ETERNITY', '2002-08-03']
    ],
    date_of_injury: [
      ['ETERNITY', '2019-02-02']
    ],
    finish_date_of_full_time_study_training_bridging_18th_birthday: [
      ['ETERNITY', '2020-08-05']
    ],
    incapacity_for_employment__corporation_determination: [
      ['2018-08-03', true]
    ],
    incapacity_for_employment__by_covered_injury: [
      ['ETERNITY', true]
    ],
    acc_sched_1__weekly_earnings: [
      ['2018-08-05', 500]
    ],
    acc__has_cover: [
      ['2018-08-05', true]
    ],
    acc_sched_1__engaged_fulltime_study_or_training: [
      ['2018-08-05', false]
    ],
    // Output
    acc_sched_1__lope_eligible: [
      ['2018-01-01', null],
      ['2019-01-01', null],
      ['2020-01-01', null],
      ['2021-01-01', null],
      ['2022-01-01', null]
    ],
    acc_sched_1__lope_weekly_compensation: [
      ['2018-01-01', null],
      ['2019-01-01', null],
      ['2020-01-01', null],
      ['2021-01-01', null],
      ['2022-01-01', null]
    ]
  },
  // Simple test for LOPE eligibility with entitlement calculation
  {
    firstName: 'Mulder',
    lastName: '',
    acc__earner: [
      ['ETERNITY', false]
    ],
    acc_sched_1__loe_more_than_lope: [
      ['ETERNITY', true]
    ],
    acc_part_2__suffered_personal_injury: [
      ['ETERNITY', true]
    ],
    acc_part_3__has_lodged_claim: [
      ['ETERNITY', true]
    ],
    acc_sched_1__incapacitated_for_6_months: [
      ['ETERNITY', true]
    ],
    date_of_birth: [
      ['ETERNITY', '2002-08-03']
    ],
    date_of_injury: [
      ['ETERNITY', '2019-02-02']
    ],
    finish_date_of_full_time_study_training_bridging_18th_birthday: [
      ['ETERNITY', '2020-08-05']
    ],
    incapacity_for_employment__corporation_determination: [
      ['2018-08-03', true]
    ],
    incapacity_for_employment__by_covered_injury: [
      ['ETERNITY', true]
    ],
    acc_sched_1__weekly_earnings: [
      ['2018-01-01', 0],
      ['2019-01-01', 0],
      ['2020-01-01', 300],
      ['2021-01-01', 0],
      ['2022-01-01', 300]
    ],
    acc_sched_1__minimum_weekly_earnings: [
      ['2018-08', 900]
    ],
    acc__has_cover: [
      ['2018-08-05', true]
    ],
    acc_sched_1__engaged_fulltime_study_or_training: [
      ['2018-08-05', false]
    ],
    // Output
    acc_sched_1__lope_eligible: [
      ['2018-01-01', null],
      ['2019-01-01', null],
      ['2020-01-01', null],
      ['2021-01-01', null],
      ['2022-01-01', null]
    ],
    acc_sched_1__lope_weekly_compensation: [
      ['2018-01-01', null],
      ['2019-01-01', null],
      ['2020-01-01', null],
      ['2021-01-01', null],
      ['2022-01-01', null]
    ]
  },
]

export default DATA;
