# Functional Requirements: New Tournament Feature

## Overview
This document outlines the functional requirements for adding a new tournament feature to the Stratego archery competition management platform. The feature enables organizations to create and configure tournaments with detailed rules and venue information.

## 1. Tournament Rules Configuration

### 1.1 Basic Tournament Information
- **Tournament Name** (required)
    - Unique identifier for the tournament
    - Maximum 200 characters
    
- **Tournament Type** (required)
    - Indoor
    - Outdoor (Target)
    - Outdoor (Field)
    - 3D
    - Clout
    
- **Tournament Dates** (required)
    - Start date and time
    - End date and time (optional)
    - Registration deadline

### 1.2 Shooting Distance Configuration
- **Distance Units** (required)
    - Meters (default)
    - Yards

- **Distance Specifications** (required, multiple allowed)
    - Distance value (e.g., 18, 25, 30, 50, 60, 70, 90 meters)
    - Round type (WA 1440, WA 720, Indoor, etc.)
    - Number of arrows per end
    - Number of ends
    - Time limit per end (optional)

### 1.3 Target Face Configuration
- **Target Face Type** (required per distance)
    - Full Face (122cm)
    - Full Face (80cm)
    - Triple Spot Vertical (40cm)
    - Triple Spot Triangular (40cm)
    - Single Spot (40cm)
    - Single Spot (60cm)
    - Single Spot (80cm)
    - 3-Spot (40cm) - Indoor
    - Field Target Faces (various sizes)

- **Target Face Scoring**
    - 10-zone scoring (X, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1)
    - 5-zone scoring (10, 8, 6, 4, 2)
    - 6-zone scoring (compound: X=10, 10, 9, 8, 7, 6...)
    - Custom scoring rules

### 1.4 Archer Division/Class Configuration
Multiple divisions can be allowed per tournament:

#### Age Categories
- **Youth Classes**
    - Under 13 (Cadet)
    - Under 15 (Cub/Cadet)
    - Under 18 (Junior/Cadet)
    - Under 21 (Junior)
    
- **Adult Classes**
    - Senior (21+)
    - Master (50+)
    - Master 60+ (60+)
    - Master 70+ (70+)

#### Bow Categories
- **Recurve** (Olympic Style)
    - Barebow
    - Olympic Recurve
    
- **Compound**
    - Compound Unlimited
    - Compound Limited (Bowhunter)
    
- **Traditional**
    - Longbow
    - Traditional Bow
    - Asiatic Bow
    
- **Adaptive/Para-Archery**
    - VI (Visually Impaired) Classes (1, 2, 3)
    - W1 (Wheelchair/Spinal Cord)
    - W2 (Wheelchair/Other Disabilities)
    - Standing

#### Gender Categories
- Male
- Female
- Mixed/Open

### 1.5 Competition Format
- **Individual Competition**
    - Qualification round
    - Elimination rounds (optional)
        - 1/32, 1/16, 1/8, 1/4, 1/2 (semifinals), Finals
    - Match format (Set system vs Cumulative scoring)

- **Team Competition** (optional)
    - Teams of 3
    - Teams of 4
    - Mixed teams

### 1.6 Entry Requirements
- **Maximum Participants** (optional)
    - Total cap
    - Per category cap

- **Minimum Qualification Score** (optional)
    - Per division/class

- **Registration Fees**
    - Per division
    - Early bird pricing (optional)
    - Late registration surcharge (optional)

### 1.7 Additional Rules
- **Equipment Inspection Requirements**
    - Required/Optional
    - Inspection time slots

- **Practice Session Availability**
    - Practice dates/times
    - Duration

- **Special Rules or Notes** (free text)
    - Tournament-specific regulations
    - Weather contingency plans
    - Protest procedures

---

## 2. Venue/Location Management

The venue information should be stored separately in the database as a reusable entity, allowing the same venue to be referenced across multiple tournaments.

### 2.1 Venue Entity Structure

#### Basic Venue Information
- **Venue ID** (auto-generated, UUID)
- **Venue Name** (required)
    - Official name of the archery range/facility
    - Maximum 200 characters
    
- **Venue Type** (required)
    - Indoor Range
    - Outdoor Field
    - Mixed Facility
    - 3D Course
    - Field Range

#### Address Information
- **Street Address** (required)
    - Address Line 1
    - Address Line 2 (optional)
    
- **City** (required)
- **State/Province** (required)
- **Postal Code** (required)
- **Country** (required)

- **GPS Coordinates** (optional but recommended)
    - Latitude
    - Longitude
    - For mapping and navigation purposes

#### Facility Specifications

##### Lane Configuration
- **Total Number of Lanes** (required)
    - Available shooting positions
    
- **Lane Configuration Details**
    - Distance markers available (e.g., 18m, 25m, 30m, 50m, 70m, 90m)
    - Indoor lanes count
    - Outdoor lanes count
    - Covered lanes count (for weather protection)

##### Range Specifications
- **Range Length** (required for outdoor)
    - Maximum shooting distance supported
    - Units (meters/yards)

- **Range Width** (optional)
    - Total width of the range area

- **Field Layout** (for outdoor)
    - Number of fields/ranges
    - Simultaneous shooting lines supported

##### Target Positions
- **Target Butt Configuration**
    - Number of permanent target butts
    - Mobile/temporary butts available
    - Target butt spacing (lane width)

#### Facility Amenities
- **Parking**
    - Available parking spaces
    - Accessible parking
    - Parking fees (if applicable)

- **Accessibility Features**
    - Wheelchair accessible
    - Accessible restrooms
    - Accessible shooting line
    - Para-archery facilities

- **On-site Facilities**
    - Restroom availability
    - Changing rooms
    - Equipment storage
    - Canteen/Food service
    - Spectator seating capacity
    - Medical facilities/First aid station
    - Pro shop on site

#### Venue Contact Information
- **Primary Contact Name** (required)
- **Contact Phone Number** (required)
- **Contact Email** (required)
- **Venue Website** (optional)
- **Emergency Contact** (required)
    - Name
    - Phone number

#### Venue Availability
- **Operating Hours**
    - Regular schedule
    - Seasonal availability
    
- **Booking Requirements**
    - Advance notice required
    - Booking restrictions
    - Cost per day/event

#### Additional Information
- **Venue Notes** (free text)
    - Special instructions
    - Access codes or gate information
    - Setup requirements

---

## 3. Data Validation Rules

### 3.1 Tournament Rules Validation
- At least one distance configuration must be specified
- Target face must be appropriate for chosen distance
- Archer classes selected must be compatible with tournament type
- Total expected participants should not exceed venue capacity

### 3.2 Venue Validation
- Required fields must be completed
- Lane count must be positive integer
- GPS coordinates must be valid if provided
- Contact information must be in valid formats

### 3.3 Tournament-Venue Validation
- Selected venue must support all configured distances
- Venue lane count must accommodate tournament format
- Venue type must match tournament type (indoor/outdoor)

---

## 4. Database Schema Considerations

### 4.1 Suggested Tables

#### `tournaments`
- id (PK)
- name
- type
- start_date
- end_date
- registration_deadline
- venue_id (FK to venues)
- status (draft, published, ongoing, completed, cancelled)
- max_participants
- registration_fee_config (JSON)
- created_at
- updated_at

#### `tournament_distances`
- id (PK)
- tournament_id (FK)
- distance_value
- distance_unit
- round_type
- arrows_per_end
- number_of_ends
- time_limit
- target_face_type
- scoring_system

#### `tournament_divisions`
- id (PK)
- tournament_id (FK)
- age_category
- bow_category
- gender_category
- max_participants
- qualification_score
- registration_fee

#### `venues`
- id (PK, UUID)
- name
- venue_type
- address_line1
- address_line2
- city
- state_province
- postal_code
- country
- latitude
- longitude
- total_lanes
- indoor_lanes
- outdoor_lanes
- max_distance
- distance_unit
- parking_spaces
- accessibility_features (JSON)
- amenities (JSON)
- contact_name
- contact_phone
- contact_email
- emergency_contact_name
- emergency_contact_phone
- venue_notes (TEXT)
- created_at
- updated_at

#### `venue_availability`
- id (PK)
- venue_id (FK)
- date
- is_available
- notes

---

## 5. API Endpoints

### 5.1 Tournament Endpoints
- `POST /api/v1/tournaments` - Create new tournament
- `GET /api/v1/tournaments` - List all tournaments
- `GET /api/v1/tournaments/{id}` - Get tournament details
- `PUT /api/v1/tournaments/{id}` - Update tournament
- `DELETE /api/v1/tournaments/{id}` - Delete tournament
- `POST /api/v1/tournaments/{id}/publish` - Publish tournament for registration

### 5.2 Venue Endpoints
- `POST /api/v1/venues` - Create new venue
- `GET /api/v1/venues` - List all venues
- `GET /api/v1/venues/{id}` - Get venue details
- `PUT /api/v1/venues/{id}` - Update venue
- `DELETE /api/v1/venues/{id}` - Delete venue (only if not used in tournaments)
- `GET /api/v1/venues/search?query={term}` - Search venues

### 5.3 Validation Endpoints
- `POST /api/v1/tournaments/validate` - Validate tournament configuration
- `POST /api/v1/venues/validate` - Validate venue data

---

## 6. User Interface Considerations

### 6.1 Tournament Creation Wizard
Suggested multi-step form:
1. **Step 1: Basic Information** (name, type, dates)
2. **Step 2: Venue Selection** (select existing or create new)
3. **Step 3: Distance & Target Configuration**
4. **Step 4: Divisions & Classes**
5. **Step 5: Entry Requirements & Fees**
6. **Step 6: Review & Publish**

### 6.2 Venue Management Interface
- Venue library/database view
- Quick venue creation form
- Detailed venue editing
- Venue reuse across tournaments
- Venue statistics (usage, capacity utilization)

---

## 7. Future Enhancements

### 7.1 Advanced Features
- Automated lane assignment based on number of registrants
- Venue calendar/booking system
