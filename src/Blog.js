import React from 'react';
import blog from "./blog.png";
import './Nav.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import wall5 from './wall5.jpg';

const Blog=()=>{
  return(
    <div>
     <Card className="BlogSection" style={{flexDirection:"column"}}>
  <Card.Header style={{fontSize:'x-large',fontFamily:'serif',fontStyle:'bold'}}>WHAT IS MENTAL HEALTH?</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        The WHO stress that mental health is “more than just the absence of mental disorders or disabilities.” Peak mental health is about not only avoiding active conditions but also looking after ongoing wellness and happiness.
They also emphasize that preserving and restoring mental health is crucial on an individual basis, as well as throughout different communities and societies the world over.
In the United States, the National Alliance on Mental Illness estimate that almost 1 in 5 adults experience mental health problems each year. 
        {' '}
      </p>
    </blockquote>
  </Card.Body>
</Card>
<Card className="BlogSection" style={{flexDirection:"column"}}>
  <Card.Header style={{fontSize:'x-large',fontFamily:'serif',fontStyle:'bold'}}>RISK FACTORS FOR MENTAL HEALTH</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        2015 study of 903 families in Iran identified several socioeconomic causes of mental health conditions, including poverty and living on the outskirts of a large city.
The researchers also explained the difference in the availability and quality of mental health treatment for certain groups in terms of modifiable factors, which can change over time, and nonmodifiable factors, which are permanent.
Modifiable factors for mental health disorders include:
socioeconomic conditions, such whether work is available in the local area
occupation
a person’s level of social involvement
education
housing quality.
<br/>
Nonmodifiable factors include:
<br/>
.gender
<br/>
.age
<br/>
.ethnicity
<br/>
The NIMH suggest that genetic family history can increase the likelihood of mental health conditions, as certain genes and gene variants put a person at higher risk.
However, many other factors contribute to the development of these disorders.
Having a gene with links to a mental health disorder, such as depression or schizophrenia, does not guarantee that a condition will develop. Likewise, people without related genes or a family history of mental illness can still have mental health issues.     
 
        {' '}
      </p>
    </blockquote>
  </Card.Body>
</Card>
<Card className="BlogSection" style={{flexDirection:"column"}}>
  <Card.Header style={{fontSize:'x-large',fontFamily:'serif',fontStyle:'bold'}}>ANXIETY DISORDER</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        According to the Anxiety and Depression Association of America, anxiety disorders are the most common type of mental illness.
People with these conditions have severe fear or anxiety, which relates to certain objects or situations. Most people with an anxiety disorder will try to avoid exposure to whatever triggers their anxiety.
Examples of anxiety disorders include:Generalized anxiety disorder (GAD) .
        {' '}
      </p>
    </blockquote>
  </Card.Body>
</Card>
<Card className="BlogSection" style={{flexDirection:"column"}}>
  <Card.Header style={{fontSize:'x-large',fontFamily:'serif',fontStyle:'bold'}}>PANIC DISORDER</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
       People with a panic disorder experience regular panic attacks, which involve sudden, overwhelming terror or a sense of imminent disaster and death.
        {' '}
      </p>
    </blockquote>
  </Card.Body>
</Card>
<Card className="BlogSection" style={{flexDirection:"column"}}>
  <Card.Header style={{fontSize:'x-large',fontFamily:'serif',fontStyle:'bold'}}>PHOBIA</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Simple phobias: These might involve a disproportionate fear of specific objects, scenarios, or animals. A fear of spiders is a common example. Learn more about simple phobias here.
        <br/>
        Social phobia: Sometimes known as social anxiety, this is a fear of being subject to the judgment of others. People with social phobia often restrict their exposure to social environments
        <br/>
        Agoraphobia: This term refers to a fear of situations in which getting away may be difficult, such as being in an elevator or moving train. Many people misunderstand this phobia as a fear of being outside.
        {' '}
      </p>
    </blockquote>
  </Card.Body>
</Card>
<Card className="BlogSection" style={{flexDirection:"column",fontFamily:'serif'}}>
  <Card.Header style={{fontSize:'x-large',fontFamily:'serif',fontStyle:'bold'}}>MOOD DISORDERS</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        People may also refer to mood disorders as affective disorders or depressive disorders.

People with these conditions have significant changes in mood, generally involving either mania, which is a period of high energy and elation, or depression. Examples of mood disorders include:
<br/>
Major depression: An individual with major depression experiences a constant low mood and loses interest in activities and events that they previously enjoyed. They can feel prolonged periods of sadness or extreme sadness.
<br/>
Bipolar disorder: A person with bipolar disorder experiences unusual changes in their mood, energy levels, levels of activity, and ability to continue with daily life. Periods of high mood are known as manic phases, while depressive phases bring on low mood. Read more about the different types of bipolar here.
<br/>
Seasonal affective disorder (SAD): Reduced daylight triggers during the fall, winter, and early spring months trigger this type of major depression. It is most common in countries far from the equator. Learn more about SAD here.
        {' '}
      </p>
    </blockquote>
  </Card.Body>
</Card>
<Card className="BlogSection" style={{flexDirection:"column"}}>
  <Card.Header style={{fontFamily:'serif',fontStyle:'bold',fontSize:'x-large'}}>SCHIZOPHRENIA DISORDERS</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Mental health authorities are still trying to determine whether schizophrenia is a single disorder or a group of related illnesses. It is a highly complex condition.
        Signs of schizophrenia typically develop between the ages of 16 and 30 years, according to the NIMH. The individual will have thoughts that appear fragmented, and they may also find it hard to process information.
        Schizophrenia has negative and positive symptoms. Positive symptoms include delusions, thought disorders, and hallucinations. Negative symptoms include withdrawal, lack of motivation, and a flat or inappropriate mood.
        {' '}
      </p>
    </blockquote>
  </Card.Body>
</Card>
<Card className="BlogSection" style={{flexDirection:"column"}}>
  <Card.Header style={{fontFamily:'serif',fontStyle:'bold',fontSize:'x-large'}}>EARLY SIGNS</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        There is no physical test or scan that reliably indicates whether a person has developed a mental illness. However, people should look out for the following as possible signs of a mental health disorder:
withdrawing from friends, family, and colleagues,
avoiding activities that they would normally enjoy,
sleeping too much or too little,
eating too much or too little,
feeling hopeless,
having consistently low energy,
using mood-altering substances, including alcohol and nicotine, more frequently
displaying negative emotions,
being confused,
being unable to complete daily tasks, such as getting to work or cooking a meal,
having persistent thoughts or memories that reappear regularly,
thinking of causing physical harm to themselves or others,
hearing voices,
experiencing delusions.
        {' '}
      </p>
    </blockquote>
  </Card.Body>
</Card>
<Card className="BlogSection" style={{flexDirection:"column"}}>
  <Card.Header style={{fontFamily:'serif',fontStyle:'bold',fontSize:'x-large'}}>TREATEMENT</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        There are various methods for managing mental health problems. Treatment is highly individual, and what works for one person may not work for another.
        Some strategies or treatments are more successful in combination with others. A person living with a chronic mental disorder may choose different options at various stages in their life.
        The individual needs to work closely with a doctor who can help them identify their needs and provide them with suitable treatment.
        {' '}
      </p>
    </blockquote>
  </Card.Body>
</Card>
<Card className="BlogSection" style={{flexDirection:"column"}}>
  <Card.Header style={{fontFamily:'serif',fontStyle:'bold',fontSize:'x-large'}}>PSYCHOTHERAPY, OR TALKING THERAPIES</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        This type of treatment takes a psychological approach to treating mental illness. Cognitive behavioral therapy, exposure therapy, and dialectical behavior therapy are examples.
Psychiatrists, psychologists, psychotherapists, and some primary care physicians carry out this type of treatment.
It can help people understand the root of their mental illness and start to work on more healthful thought patterns that support everyday living and reduce the risk of isolation and self-harm.  
        {' '}
      </p>
    </blockquote>
  </Card.Body>
</Card>
<Card className="BlogSection" style={{flexDirection:"column"}}>
  <Card.Header style={{fontFamily:'serif',fontStyle:'bold',fontSize:'x-large'}}>MEDICATION</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Some people take prescribed medications, such as antidepressants, antipsychotics, and anxiolytic drugs.
Although these cannot cure mental disorders, some medications can improve symptoms and help a person resume social interaction and a normal routine while they work on their mental health.
Some of these medications work by boosting the body’s absorption of feel-good chemicals, such as serotonin, from the brain. Other drugs either boost the overall levels of these chemicals or prevent their degradation or destruction.
        {' '}
      </p>
    </blockquote>
  </Card.Body>
</Card>
<Card className="BlogSection" style={{flexDirection:"column"}}>
  <Card.Header style={{fontFamily:'serif',fontStyle:'bold',fontSize:'x-large'}}>SELF-HELP</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
       A person coping with mental health difficulties will usually need to make changes to their lifestyle to facilitate wellness.
Such changes might include reducing alcohol intake, sleeping more, and eating a balanced, nutritious diet. People may need to take time away from work or resolve issues with personal relationships that may be causing damage to their mental health.
People with conditions such as an anxiety or depressive disorder may benefit from relaxation techniques, which include deep breathing, meditation, and mindfulness.
Having a support network, whether via self-help groups or close friends and family, can also be essential to recovery from mental illness.
        {' '}
      </p>
    </blockquote>
  </Card.Body>
</Card>

    </div>
     
  );
}
export default Blog;