import re

content = open('app.js', 'r', encoding='utf-8').read()

updates = {
    'Planetario': {'lat': 39.986, 'lon': 0.026},
    'Gurugu': {'lat': 39.999, 'lon': 0.030},
    'Piramides': {'lat': 39.960, 'lon': 0.015, 'webcamId': 'null'},
    'Palaciet': {'lat': 39.912, 'lon': -0.022, 'zone': 'sur', 'zoneName': 'Burriana', 'label': 'Burriana - El Palaciet', 'webcamId': 'null'},
    'Voramar': {'lat': 40.056, 'lon': 0.082},
    'Heliopolis': {'lat': 40.026, 'lon': 0.044},
    'MorroGos': {'lat': 40.095, 'lon': 0.148},
    'Renega': {'lat': 40.062, 'lon': 0.120, 'webcamId': 'null'},
    'Burriana': {'lat': 39.870, 'lon': -0.061},
    'Nules': {'lat': 39.825, 'lon': -0.111, 'webcamId': 'null'},
    'Almenara': {'lat': 39.734, 'lon': -0.183, 'webcamId': 'null'},
    'Peniscola N': {'lat': 40.381, 'lon': 0.409},
    'Vinaros': {'lat': 40.469, 'lon': 0.478}
}

for spot_id, data in updates.items():
    content = re.sub(r"(id:\s*'" + spot_id + r"'[\s\S]*?lat:\s*)\d+\.\d+", r"\g<1>" + str(data['lat']), content, count=1)
    content = re.sub(r"(id:\s*'" + spot_id + r"'[\s\S]*?lon:\s*)-?\d+\.\d+", r"\g<1>" + str(data['lon']), content, count=1)
    
    if 'zoneName' in data:
        content = re.sub(r"(id:\s*'" + spot_id + r"'[\s\S]*?zoneName:\s*')[^']+", r"\g<1>" + data['zoneName'], content, count=1)
    if 'label' in data:
        content = re.sub(r"(id:\s*'" + spot_id + r"'[\s\S]*?label:\s*')[^']+", r"\g<1>" + data['label'], content, count=1)
    if 'zone' in data:
        content = re.sub(r"(id:\s*'" + spot_id + r"'[\s\S]*?zone:\s*')[^']+", r"\g<1>" + data['zone'], content, count=1)
    
    if 'webcamId' in data:
        content = re.sub(r"(id:\s*'" + spot_id + r"'[\s\S]*?)webcamId:\s*'[^']+',\n\s*", r"\1", content, count=1)
        content = re.sub(r"(id:\s*'" + spot_id + r"'[\s\S]*?)webcamType:\s*'[^']+',\n\s*", r"\1", content, count=1)
        content = re.sub(r"(id:\s*'" + spot_id + r"'[\s\S]*?)referenceDist:\s*'[^']+',\n\s*", r"\1", content, count=1)
        content = re.sub(r"(id:\s*'" + spot_id + r"'[\s\S]*?lon:\s*-?\d+\.\d+,\n\s*)", r"\1webcamId: null,\n    ", content, count=1)

open('app.js', 'w', encoding='utf-8').write(content)
print('Updated app.js')
