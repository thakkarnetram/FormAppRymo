import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../state/index';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Section6 = () => {
  // locking screen to potrait mode
  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations(); // Unlocks all orientations when the component unmounts
    };
  }, []);

  // Immersive fullScreen
  Immersive.setImmersive(true);

  // declaring states
  const dispatch = useDispatch();
  const mri = useSelector(state => state.section6.mri);
  const selectedImageMRI = useSelector(
    state => state.section6.selectedImageMRI,
  );
  const clickedImageMRI = useSelector(state => state.section6.clickedImageMRI);
  const eeg = useSelector(state => state.section6.eeg);
  const selectedImageEEG = useSelector(
    state => state.section6.selectedImageEEG,
  );
  const clickedImageEEG = useSelector(state => state.section6.clickedImageEEG);
  const bera = useSelector(state => state.section6.bera);
  const selectedImageBERA = useSelector(
    state => state.section6.selectedImageBERA,
  );
  const clickedImageBERA = useSelector(
    state => state.section6.clickedImageBERA,
  );
  const opthalmalogy = useSelector(state => state.section6.opthalmalogy);
  const selectedImageOPT = useSelector(
    state => state.section6.selectedImageOPT,
  );
  const clickedImageOPT = useSelector(state => state.section6.clickedImageOPT);
  const xRays = useSelector(state => state.section6.xRays);
  const selectedImageXRAYS = useSelector(
    state => state.section6.selectedImageXRAYS,
  );
  const clickedImageXRAYS = useSelector(
    state => state.section6.clickedImageXRAYS,
  );
  const actions = bindActionCreators(actionCreators, dispatch);

  // Handlers
  const MriHandler = mri => {
    actions.updateMRI(mri);
  };
  const EegHandler = eeg => {
    actions.updateEEG(eeg);
  };
  const BeraHandler = bera => {
    actions.updateBERA(bera);
  };
  const OpthalmalogyHandler = opthalmalogy => {
    actions.updateOpthalmalogy(opthalmalogy);
  };
  const XRaysHandler = xRays => {
    actions.updateXRays(xRays);
  };
  // opening camera
  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };
  // MRI
  const openCameraMRI = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updateclickedImageMRI(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGalleryMRI = async () => {
    const result = await launchImageLibrary(options);
    actions.updateselectedImageMRI(result.assets[0].uri);
  };
  //  EEG
  const openCameraEEG = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updateclickedImageEEG(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGalleryEEG = async () => {
    const result = await launchImageLibrary(options);
    actions.updateselectedImageEEG(result.assets[0].uri);
  };
  // BERA
  const openCameraBERA = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updateclickedImageBERA(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGalleryBERA = async () => {
    const result = await launchImageLibrary(options);
    actions.updateselectedImageBERA(result.assets[0].uri);
  };
  // opthalmalogy
  const openCameraOPT = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updateclickedImageOPT(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGalleryOPT = async () => {
    const result = await launchImageLibrary(options);
    actions.updateselectedImageOPT(result.assets[0].uri);
  };
  // XRAYS
  const openCameraXRAYS = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updateclickedImageXRAYS(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGalleryXRAYS = async () => {
    const result = await launchImageLibrary(options);
    actions.updateselectedImageXRAYS(result.assets[0].uri);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Section VI => General Observation */}
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('4%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          Investigation
        </Text>
        <View>
          <View style={styles.investigationContainer}>
            <TextInput
              value={mri}
              onChangeText={MriHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="MRI"
              placeholderTextColor="#FFFFFF"
              style={styles.investigationText}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <TouchableOpacity onPress={openGalleryMRI} style={styles.newBtn}>
                <Text style={styles.newBtnText}>Select Image</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={openCameraMRI} style={styles.newBtn}>
              <Text style={styles.newBtnText}>Click Image</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            {selectedImageMRI && !clickedImageMRI ? (
              <View>
                <Image
                  source={{uri: selectedImageMRI}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                <View>
                  <TouchableOpacity
                    onPress={() => actions.updateselectedImageMRI('')}>
                    <Image
                      source={require('../../assets/cross.png')}
                      style={{
                        tintColor: '#808080',
                        marginHorizontal: wp('20%'),
                        marginVertical: wp('6%'),
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <Image
                  source={{uri: selectedImageMRI}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {selectedImageMRI ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updateselectedImageMRI('')}>
                      <Image
                        source={require('../../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            )}
            {clickedImageMRI && !selectedImageMRI ? (
              <View>
                <Image
                  source={{uri: clickedImageMRI}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                <View>
                  <TouchableOpacity
                    onPress={() => actions.updateclickedImageMRI('')}>
                    <Image
                      source={require('../../assets/cross.png')}
                      style={{
                        tintColor: '#808080',
                        marginHorizontal: wp('20%'),
                        marginVertical: wp('6%'),
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <Image
                  source={{uri: clickedImageMRI}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {clickedImageMRI ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updateclickedImageMRI('')}>
                      <Image
                        source={require('../../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            )}
          </View>
        </View>
        <View>
          <View style={styles.investigationContainer}>
            <TextInput
              value={eeg}
              onChangeText={EegHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="EEG"
              placeholderTextColor="#FFFFFF"
              style={styles.investigationText}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <TouchableOpacity onPress={openGalleryEEG} style={styles.newBtn}>
                <Text style={styles.newBtnText}>Select Image</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={openCameraEEG} style={styles.newBtn}>
              <Text style={styles.newBtnText}>Click Image</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            {selectedImageEEG && !clickedImageEEG ? (
              <View>
                <Image
                  source={{uri: selectedImageEEG}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                <View>
                  <TouchableOpacity
                    onPress={() => actions.updateselectedImageEEG('')}>
                    <Image
                      source={require('../../assets/cross.png')}
                      style={{
                        tintColor: '#808080',
                        marginHorizontal: wp('20%'),
                        marginVertical: wp('6%'),
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <Image
                  source={{uri: selectedImageEEG}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {selectedImageEEG ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updateselectedImageEEG('')}>
                      <Image
                        source={require('../../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            )}
            {clickedImageEEG && !selectedImageEEG ? (
              <View>
                <Image
                  source={{uri: clickedImageEEG}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                <View>
                  <TouchableOpacity
                    onPress={() => actions.updateclickedImageEEG('')}>
                    <Image
                      source={require('../../assets/cross.png')}
                      style={{
                        tintColor: '#808080',
                        marginHorizontal: wp('20%'),
                        marginVertical: wp('6%'),
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <Image
                  source={{uri: clickedImageEEG}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {clickedImageEEG ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updateclickedImageEEG('')}>
                      <Image
                        source={require('../../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            )}
          </View>
        </View>
        <View>
          <View style={styles.investigationContainer}>
            <TextInput
              value={bera}
              onChangeText={BeraHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="BERA"
              placeholderTextColor="#FFFFFF"
              style={styles.investigationText}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <TouchableOpacity onPress={openGalleryBERA} style={styles.newBtn}>
                <Text style={styles.newBtnText}>Select Image</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={openCameraBERA} style={styles.newBtn}>
              <Text style={styles.newBtnText}>Click Image</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            {selectedImageBERA && !clickedImageBERA ? (
              <View>
                <Image
                  source={{uri: selectedImageBERA}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                <View>
                  <TouchableOpacity
                    onPress={() => actions.updateselectedImageBERA('')}>
                    <Image
                      source={require('../../assets/cross.png')}
                      style={{
                        tintColor: '#808080',
                        marginHorizontal: wp('20%'),
                        marginVertical: wp('6%'),
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <Image
                  source={{uri: selectedImageBERA}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {selectedImageBERA ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updateselectedImageBERA('')}>
                      <Image
                        source={require('../../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            )}
            {clickedImageBERA && !selectedImageBERA ? (
              <View>
                <Image
                  source={{uri: clickedImageBERA}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                <View>
                  <TouchableOpacity
                    onPress={() => actions.updateclickedImageBERA('')}>
                    <Image
                      source={require('../../assets/cross.png')}
                      style={{
                        tintColor: '#808080',
                        marginHorizontal: wp('20%'),
                        marginVertical: wp('6%'),
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <Image
                  source={{uri: clickedImageBERA}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {clickedImageBERA ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updateclickedImageBERA('')}>
                      <Image
                        source={require('../../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            )}
          </View>
        </View>

        <View>
          <View style={styles.investigationContainer}>
            <TextInput
              value={opthalmalogy}
              onChangeText={OpthalmalogyHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="OPTHALMAOLOGY"
              placeholderTextColor="#FFFFFF"
              style={styles.investigationText}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <TouchableOpacity onPress={openGalleryOPT} style={styles.newBtn}>
                <Text style={styles.newBtnText}>Select Image</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={openCameraOPT} style={styles.newBtn}>
              <Text style={styles.newBtnText}>Click Image</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            {selectedImageOPT && !clickedImageOPT ? (
              <View>
                <Image
                  source={{uri: selectedImageOPT}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                <View>
                  <TouchableOpacity
                    onPress={() => actions.updateselectedImageOPT('')}>
                    <Image
                      source={require('../../assets/cross.png')}
                      style={{
                        tintColor: '#808080',
                        marginHorizontal: wp('20%'),
                        marginVertical: wp('6%'),
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <Image
                  source={{uri: selectedImageOPT}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {selectedImageOPT ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updateselectedImageOPT('')}>
                      <Image
                        source={require('../../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            )}
            {clickedImageOPT && !selectedImageOPT ? (
              <View>
                <Image
                  source={{uri: clickedImageOPT}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                <View>
                  <TouchableOpacity
                    onPress={() => actions.updateclickedImageOPT('')}>
                    <Image
                      source={require('../../assets/cross.png')}
                      style={{
                        tintColor: '#808080',
                        marginHorizontal: wp('20%'),
                        marginVertical: wp('6%'),
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <Image
                  source={{uri: clickedImageOPT}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {clickedImageOPT ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updateclickedImageOPT('')}>
                      <Image
                        source={require('../../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            )}
          </View>
        </View>
        <View>
          <View style={styles.investigationContainer}>
            <TextInput
              value={xRays}
              onChangeText={XRaysHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="XRAYS"
              placeholderTextColor="#FFFFFF"
              style={styles.investigationText}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <TouchableOpacity
                onPress={openGalleryXRAYS}
                style={styles.newBtn}>
                <Text style={styles.newBtnText}>Select Image</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={openCameraXRAYS} style={styles.newBtn}>
              <Text style={styles.newBtnText}>Click Image</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            {selectedImageXRAYS && !clickedImageXRAYS ? (
              <View>
                <Image
                  source={{uri: selectedImageXRAYS}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                <View>
                  <TouchableOpacity
                    onPress={() => actions.updateselectedImageXRAYS('')}>
                    <Image
                      source={require('../../assets/cross.png')}
                      style={{
                        tintColor: '#808080',
                        marginHorizontal: wp('20%'),
                        marginVertical: wp('6%'),
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <Image
                  source={{uri: selectedImageXRAYS}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {selectedImageXRAYS ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updateselectedImageXRAYS('')}>
                      <Image
                        source={require('../../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            )}
            {clickedImageXRAYS && !selectedImageXRAYS ? (
              <View>
                <Image
                  source={{uri: clickedImageXRAYS}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                <View>
                  <TouchableOpacity onPress={() => actions.updateclickedImageXRAYS('')}>
                    <Image
                      source={require('../../assets/cross.png')}
                      style={{
                        tintColor: '#808080',
                        marginHorizontal: wp('20%'),
                        marginVertical: wp('6%'),
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <Image
                  source={{uri: clickedImageXRAYS}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {clickedImageXRAYS ? (
                  <View>
                    <TouchableOpacity onPress={() => actions.updateclickedImageXRAYS('')}>
                      <Image
                        source={require('../../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  investigationContainer: {
    width: wp('90%'),
    height: hp('10%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  investigationText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('3%'),
    marginHorizontal: wp('1.5%'),
  },
  newBtn: {
    marginHorizontal: wp('5%'),
    marginVertical: wp('3%'),
    borderRadius: 20,
    backgroundColor: '#169cc4',
    height: hp('5%'),
    width: wp('35%'),
  },
  newBtnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginVertical: hp('1%'),
    marginHorizontal: hp('1%'),
    fontSize: hp('2%'),
  },
});

export default Section6;
