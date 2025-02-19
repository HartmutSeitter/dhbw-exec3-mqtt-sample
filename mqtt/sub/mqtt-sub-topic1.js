var mqtt = require('mqtt');
var Topic = 'hs/topic1/#'; //subscribe to all topics from postapp


//var client  = mqtt.connect('mqtt://localhost:1883',{clientId:"mqttjs01"});
//var client = mqtt.connect("mqtt://192.168.1.157",{clientId:"mqttjs01"})
var client  = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', mqtt_connect);
client.on('reconnect', mqtt_reconnect);
client.on('error', mqtt_error);
client.on('message', mqtt_messsageReceived);
client.on('close', mqtt_close);

function mqtt_connect()
{
    console.log("Connecting MQTT");
    client.subscribe(Topic, mqtt_subscribe);
}

function mqtt_subscribe(err, granted)
{
    console.log("Subscribed to " + Topic);
    if (err) {console.log(err);}
}

function mqtt_reconnect(err)
{
    console.log("Reconnect MQTT");
    if (err) {console.log(err);}
    //client  = mqtt.connect('mqtt://localhost:1883');
	
}

function mqtt_error(err)
{
    console.log("Error!");
	if (err) {console.log(err);}
}

function after_publish()
{
	//do nothing
}

function mqtt_messsageReceived(topic, message, packet)
{
    //
    // here you get the data from the sensor
    //
    //   do the necessary checks and save the data into the mongo database
    //
	console.log('Topic=' +  topic + '  Message=' + message);
}

function mqtt_close(err)
{
	console.log("Close MQTT");
    if (err) {console.log(err);}
}
