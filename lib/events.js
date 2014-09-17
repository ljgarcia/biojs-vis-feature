/**
 * Array containing the supported event names
 * @name Biojs.FeatureViewer-eventTypes
 */
module.exports =  [
  /**
   * @name Biojs.FeatureViewer#onFeatureClick
   * @event
   * @param {function} actionPerformed A function which receives a {@link Biojs.Event} object as argument.
   * @eventData {Object} source The component which triggered the event.
   * @eventData {string} type The name of the event.
   * @eventData {Object} featureInfo A json object with the information for the selected feature, including id.
   * @example
   * //It is not recommended to use this event to highlight and sustain that highlight after a click on a
   * //feature, instead set to ture the options selectFeatureOnMouseClick.
   * myPainter.onFeatureClick(
   *    function( obj ) {
   *    var tooltip = obj.featureLabel +
   *          " (" + obj.featureStart + ", " + obj.featureEnd + "; length " + (obj.featureEnd-obj.featureStart+1) + ")" +
   *          "<br/>Type: " + obj.featureTypeLabel + " - " + obj.typeCode + " - " + obj.typeCategory +
   *          "<br/>Evidence: " + obj.evidenceText + " - " + obj.evidenceCode;
   *       alert("Clicked: " + tooltip );
   *       Biojs.console.log(obj.shape); //rapha�l object
   *    }
   * );
   *
   * */
  "featureClick",
  /**
   * @name Biojs.FeatureViewer#onFeatureOn
   * @event
   * @param {function} actionPerformed A function which receives a {@link Biojs.Event} object as argument.
   * @eventData {Object} source The component which triggered the event.
   * @eventData {string} type The name of the event.
   * @eventData {Object} featureInfo A json object with the information for the selected feature, including id.
   * @example
   * // It is not recommended to use this event to display a tooltip or highlight the features on mouse over,
   * // instead set to true the options showFeatureTooltipOnMouseOver and highlightFeatureOnMouseOver
   *
   * myPainter.onFeatureOn(
   *    function( obj ) {
   *    var tooltip = obj.featureLabel +
   *           " (" + obj.featureStart + ", " + obj.featureEnd + "; length " + (obj.featureEnd-obj.featureStart+1) + ")" +
   *           "<br/>Type: " + obj.featureTypeLabel + " - " + obj.typeCode + " - " + obj.typeCategory +
   *           "<br/>Evidence: " + obj.evidenceText + " - " + obj.evidenceCode;
   *       alert("On feature: " + tooltip );
   *       Biojs.console.log(obj.shape); //rapha�l object
   *    }
   * );
   *
   * */
  "featureOn",
  /**
   * @name Biojs.FeatureViewer#onFeatureOff
   * @event
   * @param {function} actionPerformed A function which receives a {@link Biojs.Event} object as argument.
   * @eventData {Object} source The component which triggered the event.
   * @eventData {string} type The name of the event.
   * @eventData {Object} featureInfo A json object with the information for the selected feature, including id.
   * @example
   *
   * myPainter.onFeatureOff(
   *    function( obj ) {
   *    var tooltip = obj.featureLabel +
   *           " (" + obj.featureStart + ", " + obj.featureEnd + "; length " + (obj.featureEnd-obj.featureStart+1) + ")" +
   *           "<br/>Type: " + obj.featureTypeLabel + " - " + obj.typeCode + " - " + obj.typeCategory +
   *           "<br/>Evidence: " + obj.evidenceText + " - " + obj.evidenceCode;
   *       alert("Off feature: " + tooltip );
   *       Biojs.console.log(obj.shape); //rapha�l object
   *    }
   * );
   *
   * */
  "featureOff",
  /**
   * @name Biojs.FeatureViewer#onFeatureSelected
   * @event
   * @param {function} actionPerformed A function which receives a {@link Biojs.Event} object as argument.
   * @eventData {Object} source The component which triggered the event.
   * @eventData {string} type The name of the event.
   * @eventData {Object} featureInfo A json object with the information for the selected feature, including id.
   * @example
   * //Will only be raised if selectFeatureOnMouseClick is true
   * myPainter.onFeatureSelected(
   *    function( obj ) {
   *    var tooltip = obj.featureLabel +
   *           " (" + obj.featureStart + ", " + obj.featureEnd + "; length " + (obj.featureEnd-obj.featureStart+1) + ")" +
   *           "<br/>Type: " + obj.featureTypeLabel + " - " + obj.typeCode + " - " + obj.typeCategory +
   *           "<br/>Evidence: " + obj.evidenceText + " - " + obj.evidenceCode;
   *       alert("Selected feature: " + tooltip );
   *       Biojs.console.log(obj.shape); //rapha�l object
   *    }
   * );
   *
   * */
  "featureSelected",
  /**
   * @name Biojs.FeatureViewer#onFeatureUnselected
   * @event
   * @param {function} actionPerformed A function which receives a {@link Biojs.Event} object as argument.
   * @eventData {Object} source The component which triggered the event.
   * @eventData {string} type The name of the event.
   * @eventData {Object} featureInfo A json object with the information for the selected feature, including id.
   * @example
   * //Will only be raised if selectFeatureOnMouseClick is true
   * myPainter.onFeatureUnselected(
   *    function( obj ) {
   *    var tooltip = obj.featureLabel +
   *           " (" + obj.featureStart + ", " + obj.featureEnd + "; length " + (obj.featureEnd-obj.featureStart+1) + ")" +
   *           "<br/>Type: " + obj.featureTypeLabel + " - " + obj.typeCode + " - " + obj.typeCategory +
   *           "<br/>Evidence: " + obj.evidenceText + " - " + obj.evidenceCode;
   *       alert("Unselected feature: " + tooltip );
   *       Biojs.console.log(obj.shape); //rapha�l object
   *    }
   * );
   *
   * */
  "featureUnselected"
  ];
