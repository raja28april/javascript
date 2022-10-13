const exp = {
  "accounts": [
    "1100500105997",
    "0100500105997"
  ],
  "assets": {
    "1100500105997": {
      "IN0002635265": {
        "position": "150.00000000000",
        "close_price": "133.00000000000",
        "accrued_integroupedValues": null,
        "index_linked_bond_index_ratio": null,
        "pool_factor": null,
        "asset_class": "BONDS",
        "asset_type": "ETF",
        "composition_detail": "null",
        "composition_type": null,
        "currency_code": "EUR",
        "exchange_rate": 1,
        "coursevalue": 19950,
        "value": 19950,
        "avgPrice": 80,
        "Percentage": 0.3643508986632239
      },
      "IN0005190003": {
        "position": "10.00000000000",
        "close_price": "10.00000000000",
        "accrued_integroupedValues": null,
        "index_linked_bond_index_ratio": null,
        "pool_factor": null,
        "asset_class": "EQUITY",
        "asset_type": "EQUITY",
        "composition_detail": "null",
        "composition_type": "NONE",
        "currency_code": null,
        "exchange_rate": 1,
        "coursevalue": 100,
        "value": 100,
        "avgPrice": 50,
        "Percentage": 0.0018263202940512475
      },
      "IN00B5BMR087": {
        "position": "20.00000000000",
        "close_price": "10.00000000000",
        "accrued_integroupedValues": null,
        "index_linked_bond_index_ratio": null,
        "pool_factor": null,
        "asset_class": "EQUITY",
        "asset_type": "FUND",
        "composition_detail": "{\"modules\": [{\"weight\": 0.3, \"assetClass\": \"EQUITY\"}, {\"weight\": 0.7, \"assetClass\": \"BONDS\"}], \"cClientId\": null}",
        "composition_type": "ASSET_CLASS",
        "currency_code": "USD",
        "exchange_rate": 1,
        "coursevalue": 200,
        "value": 200,
        "avgPrice": 50,
        "Percentage": 0.003652640588102495
      },
      "IN00B5BMR088": {
        "position": "20.00000000000",
        "close_price": "10.00000000000",
        "accrued_integroupedValues": null,
        "index_linked_bond_index_ratio": null,
        "pool_factor": null,
        "asset_class": "EQUITY",
        "asset_type": "FUND",
        "composition_detail": "{\"modules\": [{\"weight\": 0.2, \"assetClass\": \"EQUITY\"}, {\"weight\": 0.5, \"assetClass\": \"BONDS\"},{\"weight\": 0.3, \"assetClass\": \"Mand\"}], \"cClientId\": null}",
        "composition_type": "ASSET_CLASS",
        "currency_code": "USD",
        "exchange_rate": 1,
        "coursevalue": 200,
        "value": 1200,
        "avgPrice": 50,
        "Percentage": 0.003652640588102495
      },
      "USIN465410AH18": {
        "position": "200.00000000000",
        "close_price": "1.81000000000",
        "accrued_integroupedValues": "1.78030000000",
        "index_linked_bond_index_ratio": "1.04440000000",
        "pool_factor": "0.80000000000",
        "asset_class": "GOVERNMENT_BONDS",
        "asset_type": "BOND",
        "composition_detail": "null",
        "composition_type": null,
        "currency_code": "USD",
        "exchange_rate": "0.57923745544",
        "coursevalue": 1.6774716709542403,
        "Stückzinsen": 1.7232039231057161,
        "value": 3.4006755940599565,
        "Percentage": 0.0000621072285091648
      }
    },
    "0100500105997": {
      "CASHIN00000001": {
        "position": "34501.50750000000",
        "close_price": "1.00000000000",
        "accrued_integroupedValues": null,
        "index_linked_bond_index_ratio": null,
        "pool_factor": null,
        "asset_class": "CASH",
        "asset_type": "CASH",
        "composition_detail": "null",
        "composition_type": "NONE",
        "currency_code": "EUR",
        "exchange_rate": 1,
        "coursevalue": 34501.5075,
        "value": 34501.5075,
        "avgPrice": 1,
        "Percentage": 0.6301080332261132
      }
    }
  }
};
/***
 * 1. Find the unique asset classes
 * 2. For each isin set the [key] as asset_class value and the [value] as positionwertValue
 * //If [key] already exists, set [value] as existingValue + current positionwertvalue
 * //If composite_type = asset_class, then
 * //for each module, calc the positionwert and add the positionwertvalue to existing map
 * 3. Calculate weight for each asset_class
 */


//1. Find the unique asset classes
let asset_classes = [];
Object.keys(exp.assets).forEach((account) => {
  Object.keys(exp.assets[account]).forEach((isin) => {
    asset_classes.push(exp.assets[account][isin].asset_class);
  });
});
console.log([...new Set(asset_classes)]);

//2.
const groupedValues = new Map();
Object.keys(exp.assets).forEach((account) => {
  Object.keys(exp.assets[account]).forEach((isin) => {
    let obj = exp.assets[account][isin];
    /***
     * If composition_type=ASSET_CLASS, then split the value for each asset_class and 
     * sum up to the grouped asset_class value
     */
    if (obj.composition_type === 'ASSET_CLASS') {
      const compModules = JSON.parse(obj.composition_detail);
      compModules.modules.forEach((module) => {
        const { assetClass: modAssetClass, weight } = module;
        const valueSplitup = weight * obj.value;
        /***
         * if asset_class is unique just add the [key] as asset_class and [value] as positionwert
         * else find the sum = existing value + current value and set as [value] to the [key]
         */
        if (!groupedValues.get(modAssetClass)) {
          groupedValues.set(modAssetClass, valueSplitup);
        } else {
          const sum = groupedValues.get(modAssetClass) + valueSplitup;
          groupedValues.set(modAssetClass, sum);
        }
      })
    } else {
      /***
       * if asset_class is unique just add the [key] as asset_class and [value] as positionwert
       * else find the sum = existing value + current value and set as [value] to the [key]
       */
      if (!groupedValues.get(obj.asset_class)) {
        groupedValues.set(obj.asset_class, obj.value);
      } else {
        const sum = groupedValues.get(obj.asset_class) + obj.value;
        groupedValues.set(obj.asset_class, sum);
      }
    }
  });
});
console.log(groupedValues);

//3.
const groupedWeights = new Map();
let totalPositionwert = 0;
console.log(groupedValues.values());
[...groupedValues.values()].forEach((value)=>{
  totalPositionwert = totalPositionwert + value;
});
console.log(totalPositionwert);
// const weigth =[];
// [...groupedValues.values()].forEach((value)=>{
//   weigth.push(convertToGermanPercentFormat(value/totalPositionwert));
// });
// console.log(weigth);
[...groupedValues.keys()].forEach((assetClass)=>{
  groupedWeights.set(assetClass,convertToGermanPercentFormat(groupedValues.get(assetClass)/totalPositionwert));
})
console.log(groupedWeights);

function convertToGermanPercentFormat(num){
  return num.toLocaleString('de-DE',{style:'percent',minimumFractionDigits: 2,
maximumFractionDigits: 2})
}



const locale = {
  "data": [
      {
          "assetClassId": "ALTERNATIVE",
          "assetClassName": "Alternative Investments"
      },
      {
          "assetClassId": "BONDS",
          "assetClassName": "Anleihen"
      },
      {
          "assetClassId": "CASH",
          "assetClassName": "Liquidität"
      },
      {
          "assetClassId": "COMMODITIES",
          "assetClassName": "Rohstoffe"
      },
      {
          "assetClassId": "CORPORATE_BONDS",
          "assetClassName": "Unternehmensanleihen"
      },
      {
          "assetClassId": "DERIVATIVE",
          "assetClassName": "Derivat"
      },
      {
          "assetClassId": "EQUITY",
          "assetClassName": "Aktien"
      },
      {
          "assetClassId": "GOVERNMENT_BONDS",
          "assetClassName": "Staatsanleihen"
      },
      {
          "assetClassId": "MIXED",
          "assetClassName": "Zusammengesetzt"
      },
      {
          "assetClassId": "REAL_ESTATE",
          "assetClassName": "Immobilien"
      },
      {
          "assetClassId": "REVERSE_CONVERTIBLE",
          "assetClassName": "Aktienanleihe"
      },
      {
          "assetClassId": "WUEWUEWUE",
          "assetClassName": "Green bird2"
      },
      {
          "assetClassId": "PERMISSION_TEST",
          "assetClassName": "Pemission test"
      },
      {
          "assetClassId": "FRANK_ASSET_CLASS",
          "assetClassName": "Frank_2"
      },
      {
          "assetClassId": "ILHAN_ASSET_CLASS",
          "assetClassName": "Ilhann"
      },
      {
          "assetClassId": "DEV_ASSET_CLASS",
          "assetClassName": "Dev"
      },
      {
          "assetClassId": "HAKAN_ASSET_CLASS",
          "assetClassName": "Hakan"
      },
      {
          "assetClassId": "GERMAN_STOCKS",
          "assetClassName": "Deutsche Aktien"
      }
  ]
};

locale.data.forEach((asset)=>{
  if(asset.assetClassId==='CASH')console.log(asset.assetClassName);
})






