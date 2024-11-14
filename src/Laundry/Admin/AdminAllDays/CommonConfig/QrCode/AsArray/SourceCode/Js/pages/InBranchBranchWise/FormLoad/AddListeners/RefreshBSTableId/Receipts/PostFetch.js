import ConfigJson from '../../../../Config.json' with {type: 'json'};
import CommonConfig from '../../../../../CommonConfig.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalGetStartUrl = CommonConfig.GetStartUrl;
    let jVarLocalGetEndPoint = ConfigJson.GetEndPoint;

    let response = await fetch(`${jVarLocalGetStartUrl}/${jVarLocalGetEndPoint}`);

    return await response;
};

export { StartFunc };

