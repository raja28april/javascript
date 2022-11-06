// const exp = {
//   "accounts": [
//     "1100500105997",
//     "0100500105997"
//   ],
//   "assets": {
//     "1100500105997": {
//       "IN0002635265": {
//         "position": "150.00000000000",
//         "close_price": "133.00000000000",
//         "accrued_integroupedValues": null,
//         "index_linked_bond_index_ratio": null,
//         "pool_factor": null,
//         "asset_class": "BONDS",
//         "asset_type": "ETF",
//         "composition_detail": "null",
//         "composition_type": null,
//         "currency_code": "EUR",
//         "exchange_rate": 1,
//         "coursevalue": 19950,
//         "value": 19950,
//         "avgPrice": 80,
//         "Percentage": 0.3643508986632239
//       },
//       "IN0005190003": {
//         "position": "10.00000000000",
//         "close_price": "10.00000000000",
//         "accrued_integroupedValues": null,
//         "index_linked_bond_index_ratio": null,
//         "pool_factor": null,
//         "asset_class": "EQUITY",
//         "asset_type": "EQUITY",
//         "composition_detail": "null",
//         "composition_type": "NONE",
//         "currency_code": null,
//         "exchange_rate": 1,
//         "coursevalue": 100,
//         "value": 100,
//         "avgPrice": 50,
//         "Percentage": 0.0018263202940512475
//       },
//       "IN00B5BMR087": {
//         "position": "20.00000000000",
//         "close_price": "10.00000000000",
//         "accrued_integroupedValues": null,
//         "index_linked_bond_index_ratio": null,
//         "pool_factor": null,
//         "asset_class": "EQUITY",
//         "asset_type": "FUND",
//         "composition_detail": "{\"modules\": [{\"weight\": 0.3, \"assetClass\": \"EQUITY\"}, {\"weight\": 0.7, \"assetClass\": \"BONDS\"}], \"cClientId\": null}",
//         "composition_type": "ASSET_CLASS",
//         "currency_code": "USD",
//         "exchange_rate": 1,
//         "coursevalue": 200,
//         "value": 200,
//         "avgPrice": 50,
//         "Percentage": 0.003652640588102495
//       },
//       "IN00B5BMR088": {
//         "position": "20.00000000000",
//         "close_price": "10.00000000000",
//         "accrued_integroupedValues": null,
//         "index_linked_bond_index_ratio": null,
//         "pool_factor": null,
//         "asset_class": "EQUITY",
//         "asset_type": "FUND",
//         "composition_detail": "{\"modules\": [{\"weight\": 0.2, \"assetClass\": \"EQUITY\"}, {\"weight\": 0.5, \"assetClass\": \"BONDS\"},{\"weight\": 0.3, \"assetClass\": \"Mand\"}], \"cClientId\": null}",
//         "composition_type": "ASSET_CLASS",
//         "currency_code": "USD",
//         "exchange_rate": 1,
//         "coursevalue": 200,
//         "value": 1200,
//         "avgPrice": 50,
//         "Percentage": 0.003652640588102495
//       },
//       "USIN465410AH18": {
//         "position": "200.00000000000",
//         "close_price": "1.81000000000",
//         "accrued_integroupedValues": "1.78030000000",
//         "index_linked_bond_index_ratio": "1.04440000000",
//         "pool_factor": "0.80000000000",
//         "asset_class": "GOVERNMENT_BONDS",
//         "asset_type": "BOND",
//         "composition_detail": "null",
//         "composition_type": null,
//         "currency_code": "USD",
//         "exchange_rate": "0.57923745544",
//         "coursevalue": 1.6774716709542403,
//         "Stückzinsen": 1.7232039231057161,
//         "value": 3.4006755940599565,
//         "Percentage": 0.0000621072285091648
//       }
//     },
//     "0100500105997": {
//       "CASHIN00000001": {
//         "position": "34501.50750000000",
//         "close_price": "1.00000000000",
//         "accrued_integroupedValues": null,
//         "index_linked_bond_index_ratio": null,
//         "pool_factor": null,
//         "asset_class": "CASH",
//         "asset_type": "CASH",
//         "composition_detail": "null",
//         "composition_type": "NONE",
//         "currency_code": "EUR",
//         "exchange_rate": 1,
//         "coursevalue": 34501.5075,
//         "value": 34501.5075,
//         "avgPrice": 1,
//         "Percentage": 0.6301080332261132
//       }
//     }
//   }
// };
// /***
//  * 1. Find the unique asset classes
//  * 2. For each isin set the [key] as asset_class value and the [value] as positionwertValue
//  * //If [key] already exists, set [value] as existingValue + current positionwertvalue
//  * //If composite_type = asset_class, then
//  * //for each module, calc the positionwert and add the positionwertvalue to existing map
//  * 3. Calculate weight for each asset_class
//  */

// //1. Find the unique asset classes
// let asset_classes = [];
// Object.keys(exp.assets).forEach((account) => {
//   Object.keys(exp.assets[account]).forEach((isin) => {
//     asset_classes.push(exp.assets[account][isin].asset_class);
//   });
// });
// console.log([...new Set(asset_classes)]);

// //2.
// const groupedValues = new Map();
// Object.keys(exp.assets).forEach((account) => {
//   Object.keys(exp.assets[account]).forEach((isin) => {
//     let obj = exp.assets[account][isin];
//     /***
//      * If composition_type=ASSET_CLASS, then split the value for each asset_class and
//      * sum up to the grouped asset_class value
//      */
//     if (obj.composition_type === 'ASSET_CLASS') {
//       const compModules = JSON.parse(obj.composition_detail);
//       compModules.modules.forEach((module) => {
//         const { assetClass: modAssetClass, weight } = module;
//         const valueSplitup = weight * obj.value;
//         /***
//          * if asset_class is unique just add the [key] as asset_class and [value] as positionwert
//          * else find the sum = existing value + current value and set as [value] to the [key]
//          */
//         if (!groupedValues.get(modAssetClass)) {
//           groupedValues.set(modAssetClass, valueSplitup);
//         } else {
//           const sum = groupedValues.get(modAssetClass) + valueSplitup;
//           groupedValues.set(modAssetClass, sum);
//         }
//       })
//     } else {
//       /***
//        * if asset_class is unique just add the [key] as asset_class and [value] as positionwert
//        * else find the sum = existing value + current value and set as [value] to the [key]
//        */
//       if (!groupedValues.get(obj.asset_class)) {
//         groupedValues.set(obj.asset_class, obj.value);
//       } else {
//         const sum = groupedValues.get(obj.asset_class) + obj.value;
//         groupedValues.set(obj.asset_class, sum);
//       }
//     }
//   });
// });
// console.log(groupedValues);

// //3.
// const groupedWeights = new Map();
// let totalPositionwert = 0;
// console.log(groupedValues.values());
// [...groupedValues.values()].forEach((value)=>{
//   totalPositionwert = totalPositionwert + value;
// });
// console.log(totalPositionwert);
// // const weigth =[];
// // [...groupedValues.values()].forEach((value)=>{
// //   weigth.push(convertToGermanPercentFormat(value/totalPositionwert));
// // });
// // console.log(weigth);
// [...groupedValues.keys()].forEach((assetClass)=>{
//   groupedWeights.set(assetClass,convertToGermanPercentFormat(groupedValues.get(assetClass)/totalPositionwert));
// })
// console.log(groupedWeights);

// function convertToGermanPercentFormat(num){
//   return num.toLocaleString('de-DE',{style:'percent',minimumFractionDigits: 2,
// maximumFractionDigits: 2})
// }

// const locale = {
//   "data": [
//       {
//           "assetClassId": "ALTERNATIVE",
//           "assetClassName": "Alternative Investments"
//       },
//       {
//           "assetClassId": "BONDS",
//           "assetClassName": "Anleihen"
//       },
//       {
//           "assetClassId": "CASH",
//           "assetClassName": "Liquidität"
//       },
//       {
//           "assetClassId": "COMMODITIES",
//           "assetClassName": "Rohstoffe"
//       },
//       {
//           "assetClassId": "CORPORATE_BONDS",
//           "assetClassName": "Unternehmensanleihen"
//       },
//       {
//           "assetClassId": "DERIVATIVE",
//           "assetClassName": "Derivat"
//       },
//       {
//           "assetClassId": "EQUITY",
//           "assetClassName": "Aktien"
//       },
//       {
//           "assetClassId": "GOVERNMENT_BONDS",
//           "assetClassName": "Staatsanleihen"
//       },
//       {
//           "assetClassId": "MIXED",
//           "assetClassName": "Zusammengesetzt"
//       },
//       {
//           "assetClassId": "REAL_ESTATE",
//           "assetClassName": "Immobilien"
//       },
//       {
//           "assetClassId": "REVERSE_CONVERTIBLE",
//           "assetClassName": "Aktienanleihe"
//       },
//       {
//           "assetClassId": "WUEWUEWUE",
//           "assetClassName": "Green bird2"
//       },
//       {
//           "assetClassId": "PERMISSION_TEST",
//           "assetClassName": "Pemission test"
//       },
//       {
//           "assetClassId": "FRANK_ASSET_CLASS",
//           "assetClassName": "Frank_2"
//       },
//       {
//           "assetClassId": "ILHAN_ASSET_CLASS",
//           "assetClassName": "Ilhann"
//       },
//       {
//           "assetClassId": "DEV_ASSET_CLASS",
//           "assetClassName": "Dev"
//       },
//       {
//           "assetClassId": "HAKAN_ASSET_CLASS",
//           "assetClassName": "Hakan"
//       },
//       {
//           "assetClassId": "GERMAN_STOCKS",
//           "assetClassName": "Deutsche Aktien"
//       }
//   ]
// };

// locale.data.forEach((asset)=>{
//   if(asset.assetClassId==='CASH')console.log(asset.assetClassName);
// })

const sql = {
  data: [
    {
      b_client_id: "10600",
      bank_id: "70031337",
      account_number: "0100538732752",
      account_type: "CASH",
      isin: "CASH00000001",
      calculation_date_type: "COMPLETION_DATE",
      date: "2022-10-13",
      position: 17000.45,
      value: null,
      valuation_currency: null,
      value_asset_price: null,
      value_asset_price_date: null,
      value_exchange_rate: null,
      value_exchange_rate_date: null,
      average_buy_exchange_rate: 1.0,
      average_buy_price_in_security_currency: 1.0,
      average_buy_security_currency: "EUR",
      average_buy_price_in_settlement_currency: 1.0,
      average_buy_settlement_currency: "EUR",
      additional_asset: null,
      created_by: null,
      updated_by: null,
      created_at: "2022-10-14T00:21:44.131Z",
      updated_at: null,
      version: 0,
    },
    {
      b_client_id: "10600",
      bank_id: "70031337",
      account_number: "1100538732752",
      account_type: "SECURITY",
      isin: "DE0002635265",
      calculation_date_type: "TRANSACTION_DATE",
      date: "2022-10-13",
      position: 30.0,
      value: null,
      valuation_currency: null,
      value_asset_price: null,
      value_asset_price_date: null,
      value_exchange_rate: null,
      value_exchange_rate_date: null,
      average_buy_exchange_rate: 1.0,
      average_buy_price_in_security_currency: 100.0,
      average_buy_security_currency: "EUR",
      average_buy_price_in_settlement_currency: 100.0,
      average_buy_settlement_currency: "EUR",
      additional_asset: null,
      created_by: null,
      updated_by: null,
      created_at: "2022-10-14T00:21:44.131Z",
      updated_at: null,
      version: 0,
    },
    {
      b_client_id: "10600",
      bank_id: "70031337",
      account_number: "0100549488581",
      account_type: "CASH",
      isin: "CASH00000001",
      calculation_date_type: "COMPLETION_DATE",
      date: "2022-10-12",
      position: 17000.45,
      value: null,
      valuation_currency: null,
      value_asset_price: null,
      value_asset_price_date: null,
      value_exchange_rate: null,
      value_exchange_rate_date: null,
      average_buy_exchange_rate: 1.0,
      average_buy_price_in_security_currency: 1.0,
      average_buy_security_currency: "EUR",
      average_buy_price_in_settlement_currency: 1.0,
      average_buy_settlement_currency: "EUR",
      additional_asset: null,
      created_by: null,
      updated_by: null,
      created_at: "2022-10-13T00:18:31.156Z",
      updated_at: null,
      version: 0,
    },
  ],
};
console.log(sql.data.length);
const validAUMs = sql.data
  .map((row) => row.position)
  .reduce((acc, pos) => acc + pos, 0);
console.log(validAUMs);

const data2 = [
  {
    end_date: null,
    deleted: null,
    c_client_id: "877253cf-537d-4a01-a95a-5e5b2a203f5d",
    account_group_id: "9a3efe6e-5485-4397-8fbd-76f17cad29b2",
    created_at: "2022-08-13 06:45:30.476583",
    id: "03772b30-d6fb-4e34-a5d5-a72671762812",
    accounts: "javax.sql.rowset.serial.SerialArray@69a0bbc4",
    b_client_id: "10600",
    start_date: "2021-01-01",
  },
  {
    end_date: null,
    deleted: null,
    c_client_id: "cf9ea369-bc6f-494b-a6a2-25d008ba7904",
    account_group_id: "0abbb7d5-e40e-4a5e-abfa-17741ed55aeb",
    created_at: "2022-08-13 09:14:23.416239",
    id: "9f190680-a53c-4ce9-8e83-8e0972e66c2b",
    accounts: "javax.sql.rowset.serial.SerialArray@c7d2bf06",
    b_client_id: "10600",
    start_date: "2021-01-01",
  },
];
const cclientIds = [];
data2.forEach((obj) => {
  cclientIds.push(obj.c_client_id);
});
console.log(cclientIds[0], cclientIds[1]);


// const input = prompt('enter a 3 digit number');

let input = [31343, 313, 452];

input.forEach(() => {
  sum = 0;
  while (input > 1) {
    sum += input % 10;
    input = Math.floor(input / 10);
  }
  console.log(input);
  console.log(sum);
})


