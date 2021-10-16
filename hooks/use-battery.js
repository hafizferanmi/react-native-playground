import React, { useEffect, useState } from "react";
import * as Battery from "expo-battery";

const useBattery = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    Battery.getBatteryLevelAsync()
      .then((battery) => setBatteryLevel(battery))
      .catch((e) => setBatteryLevel(0));
    const _subscription = Battery.addBatteryLevelListener(
      ({ batteryLevel }) => {
        setBatteryLevel(batteryLevel);
      }
    );

    return () => {
      _subscription && _subscription.remove();
    };
  }, []);

  return (batteryLevel * 100).toFixed(0);
};

export default useBattery;
