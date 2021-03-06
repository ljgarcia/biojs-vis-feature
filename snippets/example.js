var feature = require("biojs-vis-feature");
fakeServer(function(data){
  console.log(data);
  var obj = new feature({
    target: yourDiv.id,
    json: data,
    showSlider: true,
    show: true,
    showFeatureTooltipOnMouseOver: true,
  });

  //@biojs-instance=obj

  obj.onAll(function(eventName,d){
    console.log(eventName, d);
  });
});

function fakeServer(callback){
  var json = {
    "featuresArray":[
    {
      "nonOverlappingStyle":{"heightOrRadius":10,"y":56},"type":"rect","featureEnd":73,"fillOpacity":0.5
        ,"evidenceText":"UniProt","stroke":"#9B7057","height":10,"path":"","typeLabel":"Propeptide"
        ,"featureLabel":"Propeptide","featureStart":1,"strokeWidth":1,"text":""
        ,"centeredStyle":{"heightOrRadius":44,"y":73},"fill":"#9B7057","width":495
        ,"typeCategory":"Molecule processing","typeCode":"SO:0001062","cy":56,"cx":27,"evidenceCode":""
        ,"r":10,"featureId":"UNIPROTKB_Q8LAX3_PROPEP_1_73","rowsStyle":{"heightOrRadius":10,"y":169}
      ,"featureTypeLabel":"propeptide","y":56,"x":27
    }
    ,{
      "nonOverlappingStyle":{"heightOrRadius":10,"y":56},"type":"rect","featureEnd":96,"fillOpacity":0.5
        ,"evidenceText":"UniProt","stroke":"#7DBAA4","height":10,"path":"","typeLabel":"Peptide"
        ,"featureLabel":"Elicitor peptide 3","featureStart":74,"strokeWidth":1,"text":""
        ,"centeredStyle":{"heightOrRadius":40,"y":75},"fill":"#7DBAA4","width":151
        ,"typeCategory":"Molecule processing","typeCode":"SO:0001064","cy":56,"cx":529,"evidenceCode":""
        ,"r":10,"featureId":"UNIPROTKB_Q8LAX3_PEPTIDE_74_96","rowsStyle":{"heightOrRadius":10,"y":157}
      ,"featureTypeLabel":"active_peptide","y":56,"x":529
    }
    ]
      ,"segment":"Q8LAx3"
      ,"legend":{
        "segment":{"yPosCentered":190,"text":"Q8LAX3","yPos":106,"xPos":15,"yPosNonOverlapping":106,"yPosRows":290}
        ,"key":[
        {
          "label":{
            "total":"1","yPosCentered":210,"text":"Peptide","yPos":126,"xPos":50
              ,"yPosNonOverlapping":126,"yPosRows":310
          }
          ,"shape":{
            "centeredStyle":{"heightOrRadius":5,"y":208},"text":""
              ,"nonOverlappingStyle":{"heightOrRadius":5,"y":121},"width":30,"fill":"#7DBAA4"
              ,"cy":121,"cx":15,"type":"rect","fillOpacity":0.5,"stroke":"#7DBAA4","height":5,"r":10
              ,"path":"","rowsStyle":{"heightOrRadius":5,"y":305},"typeLabel":"Peptide","y":121
              ,"strokeWidth":1,"x":15
          }
        }
        ,{
          "label":{
            "total":"1","yPosCentered":210,"text":"Propeptide","yPos":126,"xPos":205
              ,"yPosNonOverlapping":126,"yPosRows":310
          }
          ,"shape":{
            "centeredStyle":{"heightOrRadius":5,"y":208},"text":""
              ,"nonOverlappingStyle":{"heightOrRadius":5,"y":121},"width":30,"fill":"#9B7057"
              ,"cy":121,"cx":170,"type":"rect","fillOpacity":0.5,"stroke":"#9B7057","height":5,"r":10
              ,"path":"","rowsStyle":{"heightOrRadius":5,"y":305},"typeLabel":"Propeptide","y":121
              ,"strokeWidth":1,"x":170
          }
        }
        ]
      }
    ,"configuration":{
      "requestedStop":96,"horizontalGridNumLines":2,"sequenceLineYCentered":95,"requestedStart":1
        ,"gridLineHeight":12,"rightMargin":20,"belowRuler":30,"sequenceLength":96
        ,"horizontalGridNumLinesNonOverlapping":2,"horizontalGridNumLinesCentered":6
        ,"verticalGridLineLengthRows":284,"unitSize":6.875,"sizeYNonOverlapping":76,"style":"nonOverlapping"
        ,"sequenceLineYRows":155,"sequenceLineY":54,"verticalGrid":false,"rulerY":20
        ,"dasSources":"http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot","horizontalGrid":false
        ,"pixelsDivision":50,"sizeY":76,"sizeX":700
        ,"dasReference":"http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot","sizeYRows":260,"aboveRuler":10
        ,"rulerLength":660,"verticalGridLineLengthNonOverlapping":66,"sizeYKey":210,"sizeYCentered":160
        ,"sequenceLineYNonOverlapping":54,"verticalGridLineLength":66,"horizontalGridNumLinesRows":8
        ,"leftMargin":20,"nonOverlapping":true,"verticalGridLineLengthCentered":172
    }
  };
  return callback(json);
}
