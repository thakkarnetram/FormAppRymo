import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';

// Import  sections here
import Section1 from '../Components/Sections/Section1';
import Section2 from '../Components/Sections/Section2';
import Section3 from '../Components/Sections/Section3';
import Section4 from '../Components/Sections/Section4';
import Section5 from '../Components/Sections/Section5';
import Section6 from '../Components/Sections/Section6';
import Section7 from '../Components/Sections/Section7';
import Generate from './GenerateHtml/Generate';

const sections = [
  {key: 'section1', title: 'Section 1', component: Section1},
  {key: 'section2', title: 'Section 2', component: Section2},
  {key: 'section3', title: 'Section 3', component: Section3},
  {key: 'section4', title: 'Section 4', component: Section4},
  {key: 'section5', title: 'Section 5', component: Section5},
  {key: 'section6', title: 'Section 6', component: Section6},
  {key: 'section7', title: 'Section 7', component: Section7},
  // Add more sections as needed
];

const AssessmentCopy = () => {
  const renderItem = ({item}) => {
    const SectionComponent = item.component;
    return <SectionComponent />;
  };

  const renderGenerate = () => {
    return <Generate />;
  };

  const renderSectionItem = ({item}) => {
    if (item.key === 'generate') {
      return renderGenerate();
    } else {
      return renderItem({item});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[...sections, {key: 'generate'}]}
        renderItem={renderSectionItem}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
};

export default AssessmentCopy;
