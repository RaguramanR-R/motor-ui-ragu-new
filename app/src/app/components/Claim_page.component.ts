// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { successPopupComponent } from 'app/components/successPopup.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Claim_page',
  templateUrl: './Claim_page.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class Claim_pageComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_jCXW9eER2CPk3KPR(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_jCXW9eER2CPk3KPR(bh) {
    try {
      bh = this.sd_n2clt1AJ3j31BEUr(bh);
      //appendnew_next_sd_jCXW9eER2CPk3KPR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jCXW9eER2CPk3KPR');
    }
  }

  fetchpolicy(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_FcHWezNTyW0x4kbM(bh);
      //appendnew_next_fetchpolicy
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hDmuhCDFR4NPMBZl');
    }
  }

  fetchMasterData(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_vcFpa2u0v34z8pra(bh);
      //appendnew_next_fetchMasterData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_77vD8nOl6pDWj7nw');
    }
  }

  validation(fieldName: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { fieldName };
      bh.local = {};
      bh = this.sd_KGBVhD7aj0qjLIyQ(bh);
      //appendnew_next_validation
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Hf9TKQ3bYZprLGGN');
    }
  }

  submit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_J1xN0lOtm1boOHJJ(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Saqz5a2SGXalwNht');
    }
  }
  //appendnew_flow_Claim_pageComponent_start

  sd_n2clt1AJ3j31BEUr(bh) {
    try {
      this.page.policyFetched = false;
      bh = this.sd_pQpySbarRraWQ9KR(bh);
      //appendnew_next_sd_n2clt1AJ3j31BEUr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n2clt1AJ3j31BEUr');
    }
  }

  sd_pQpySbarRraWQ9KR(bh) {
    try {
      let outputVariables = this.fetchMasterData();

      //appendnew_next_sd_pQpySbarRraWQ9KR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pQpySbarRraWQ9KR');
    }
  }

  sd_FcHWezNTyW0x4kbM(bh) {
    try {
      const page = this.page;
      page.policyNoError = '';
      page.policyFetched = false;

      if (!page.policyNo) {
        page.policyNoError = 'Policy No is required';
        return;
      }

      bh.local.policyApiUrl =
        bh.system.environment.properties.ssdURL + 'policy/' + page.policyNo;

      bh = this.gethttp(bh);
      //appendnew_next_sd_FcHWezNTyW0x4kbM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FcHWezNTyW0x4kbM');
    }
  }

  async gethttp(bh) {
    try {
      let requestOptions = {
        url: bh.local.policyApiUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_4BEoMISi0I2GjHGT(bh);
      //appendnew_next_gethttp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UeM8ilH0fyuuWtjz');
    }
  }

  sd_4BEoMISi0I2GjHGT(bh) {
    try {
      const page = this.page;
      const response = bh.local.response;

      page.policyNoError = '';

      if (!response || !response.policy_no) {
        console.log('11111', response);
        page.policyFetched = false;

        page.policyNoError = 'Policy not found.';

        page.policyNumber = '';
        page.customerName = '';
        page.customerEmail = '';
        page.vehicleRegistration = '';
        page.vehicleType = '';
        page.yearOfManufacture = '';
        page.idv = '';
        page.policyStartDate = '';
        page.policyEndDate = '';
        page.policyStatus = '';
      } else {
        page.policyFetched = true;

        // Policy details
        page.policyNumber = response.policy_no;
        page.policyStatus = response.status;

        // Customer details
        page.customerName = response.customer_name;
        page.customerEmail = response.customer_email;

        // Vehicle details
        page.vehicleRegistration = response.vehicle_reg;
        page.vehicleType = response.vehicle_type;
        page.yearOfManufacture = response.year_of_manufacture;

        // IDV
        page.idv = response.idv;

        // Policy period
        page.policyStartDate = response.policy_start_date;
        page.policyEndDate = response.policy_end_date;
      }
      //appendnew_next_sd_4BEoMISi0I2GjHGT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4BEoMISi0I2GjHGT');
    }
  }

  sd_WFtfSS0H4C1tSEgx(bh) {
    try {
      const page = this.page;
      console.log('bh.error.error', bh.error.error);
      console.log('bh.error.error.error', bh.error.error.error);
      page.policyFetched = false;
      page.policyNoError = bh.error.error.error;
      //appendnew_next_sd_WFtfSS0H4C1tSEgx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WFtfSS0H4C1tSEgx');
    }
  }

  sd_vcFpa2u0v34z8pra(bh) {
    try {
      const page = this.page;
      bh.local.masterApiUrl =
        bh.system.environment.properties.ssdURL + 'master-data';

      bh = this.sd_mTmHiNxe9TzrZlzm(bh);
      //appendnew_next_sd_vcFpa2u0v34z8pra
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vcFpa2u0v34z8pra');
    }
  }

  async sd_mTmHiNxe9TzrZlzm(bh) {
    try {
      let requestOptions = {
        url: bh.local.masterApiUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.records = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_DcxFvemIknuFQrQ4(bh);
      //appendnew_next_sd_mTmHiNxe9TzrZlzm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mTmHiNxe9TzrZlzm');
    }
  }

  sd_DcxFvemIknuFQrQ4(bh) {
    try {
      const page = this.page;
      page.today = new Date();

      page.policyFetched = false;
      page.isDisabled = true;
      page.policyLoading = false;
      page.submitting = false;
      page.submitted = false;
      page.submitSuccess = false;

      page.submitError = '';
      page.submitMessage = '';
      page.validationErrors = {};

      // ============================================================
      // MOTOR OD MASTER DATA
      // ============================================================

      page.partGroups = [];
      page.lossTypes = [];

      // ============================================================
      // LOAD MASTER DATA RESPONSE
      // ============================================================

      if (bh.local.records) {
        var masterData = bh.local.records;

        // ========================================================
        // PART GROUPS
        // ========================================================

        if (Array.isArray(masterData.partGroups)) {
          page.partGroups = masterData.partGroups.map(function (item) {
            return {
              label: item['Part Group'],
              value: item['Part Group Code'],
            };
          });
        }

        // ========================================================
        // LOSS TYPES
        // ========================================================

        if (Array.isArray(masterData.lossTypes)) {
          page.lossTypes = masterData.lossTypes.map(function (item) {
            return {
              label: item['Loss Type'],
              value: item['Loss Code'],
            };
          });
        }
      } else {
        console.log(
          'Motor OD master data is not available or API response is unsuccessful'
        );
      }

      // ============================================================
      // CLAIM FORM DEFAULT VALUES
      // ============================================================

      page.policyNumber = '';
      page.customerName = '';
      page.customerEmail = '';
      page.vehicleRegistration = '';
      page.vehicleType = '';
      page.yearOfManufacture = '';
      page.idv = '';

      page.policyStartDate = '';
      page.policyEndDate = '';
      page.policyStatus = '';

      page.dateOfLoss = '';

      page.lossType = '';
      page.primaryDamageGroup = '';

      page.estimatedPartsCost = '';

      page.garageType = '';

      page.firFiled = '';
      page.validLicence = '';

      page.lossDescription = '';

      // ============================================================
      // FIELD ERRORS
      // ============================================================

      page.policyNoError = '';
      page.dateOfLossError = '';
      page.lossTypeError = '';
      page.primaryDamageGroupError = '';
      page.estimatedPartsCostError = '';
      page.garageTypeError = '';

      page.lossDescriptionError = '';
      page.today = new Date();
      console.log('page.partGroups', page.partGroups);
      console.log('page.lossTypes', page.lossTypes);
      //appendnew_next_sd_DcxFvemIknuFQrQ4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DcxFvemIknuFQrQ4');
    }
  }

  sd_KGBVhD7aj0qjLIyQ(bh) {
    try {
      const page = this.page;
      const f = bh.input.fieldName;
      const v = page[f];

      const s = v == null ? '' : v.toString().trim();

      let e = '';

      /* ============================================================
       * POLICY NUMBER
       * ============================================================ */

      if (f === 'policyNo') {
        if (!s) {
          e = 'Policy Number is required';
        }
      } else if (f === 'dateOfLoss') {

      /* ============================================================
       * DATE OF LOSS
       * ============================================================ */
        if (!s) {
          e = 'Date of Loss is required';
        } else {
          const lossDate = new Date(v);

          if (isNaN(lossDate.getTime())) {
            e = 'Enter a valid Date of Loss';
          } else if (lossDate > new Date()) {
            e = 'Date of Loss cannot be in the future';
          } else if (
            page.policyFetched &&
            page.policyStartDate &&
            page.policyEndDate
          ) {
            const policyStart = new Date(page.policyStartDate);

            const policyEnd = new Date(page.policyEndDate);

            if (lossDate < policyStart || lossDate > policyEnd) {
              e = 'Date of Loss must be within the policy period';
            }
          }
        }
      } else if (f === 'lossType') {

      /* ============================================================
       * LOSS TYPE
       * ============================================================ */
        if (!s) {
          e = 'Loss Type is required';
        }
      } else if (f === 'primaryDamageGroup') {

      /* ============================================================
       * PRIMARY DAMAGE GROUP
       * ============================================================ */
        if (!s) {
          e = 'Primary Damage Group is required';
        }
      } else if (f === 'estimatedPartsCost') {

      /* ============================================================
       * ESTIMATED PARTS COST
       * ============================================================ */
        if (!s) {
          e = 'Estimated Parts Cost is required';
        } else if (!isFinite(Number(v)) || Number(v) <= 0) {
          e = 'Estimated Parts Cost must be greater than 0';
        } else if (page.idv && Number(v) > Number(page.idv)) {
          e = 'Estimated Parts Cost cannot exceed IDV';
        }
      } else if (f === 'garageType') {

      /* ============================================================
       * GARAGE TYPE
       * ============================================================ */
        if (!s) {
          e = 'Garage Type is required';
        } else if (s !== 'NETWORK' && s !== 'NON_NETWORK') {
          e = 'Select a valid Garage Type';
        }
      } else if (f === 'lossDescription') {

      /* ============================================================
       * LOSS DESCRIPTION
       * ============================================================ */
        if (!s) {
          e = 'Loss Description is required';
        } else if (s.length > 200) {
          e = 'Loss Description cannot exceed 200 characters';
        }
      }

      /* ============================================================
       * UPDATE FIELD ERROR
       * ============================================================ */

      page[f + 'Error'] = e;

      /* ============================================================
       * ENSURE VALIDATION ERROR OBJECT
       * ============================================================ */

      if (!page.validationErrors) {
        page.validationErrors = {};
      }

      /* ============================================================
       * UPDATE VALIDATION ERRORS
       * ============================================================ */

      if (e) {
        page.validationErrors[f] = e;
      } else {
        page.validationErrors[f] = '';

        delete page.validationErrors[f];
      }

      /* ============================================================
       * RECALCULATE FORM VALIDITY
       * ============================================================ */

      let hasErrors = false;

      Object.keys(page.validationErrors || {}).forEach(function (key) {
        const error = page.validationErrors[key];

        if (error && error.toString().trim() !== '') {
          hasErrors = true;
        }
      });

      /* ============================================================
       * FORM VALID STATE
       * ============================================================ */

      bh.local.isValid = !hasErrors;

      /* ============================================================
       * DEBUG
       * ============================================================ */

      console.log('====================================');

      console.log('Field:', f);

      console.log('Value:', s);

      console.log('Field Error:', e);

      console.log('Page Error:', page[f + 'Error']);

      console.log('Validation Errors:', page.validationErrors);

      console.log('Form Valid:', bh.local.isValid);

      console.log('====================================');
      //appendnew_next_sd_KGBVhD7aj0qjLIyQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KGBVhD7aj0qjLIyQ');
    }
  }

  sd_J1xN0lOtm1boOHJJ(bh) {
    try {
      const page = this.page;
      /* ============================================================
       * INITIALIZE SUBMISSION STATE
       * ============================================================ */

      page.submitted = false;
      page.submitError = '';
      page.submitSuccess = false;
      page.submitting = false;

      console.log('Motor OD Claim page:', page);

      /* ============================================================
       * INITIALIZE VALIDATION
       * ============================================================ */

      if (!page.validationErrors) {
        page.validationErrors = {};
      }

      page.validationErrors = {};

      let valid = true;

      /* ============================================================
       * SET ERROR FUNCTION
       * ============================================================ */

      function setError(field, message) {
        page[field + 'Error'] = message || '';

        page.validationErrors[field] = message || '';

        if (message) {
          valid = false;
        }
      }

      /* ============================================================
       * CLEAR PREVIOUS FIELD ERRORS
       * ============================================================ */

      const fields = [
        'policyNo',
        'dateOfLoss',
        'lossType',
        'primaryDamageGroup',
        'estimatedPartsCost',
        'garageType',

        'lossDescription',
      ];

      fields.forEach(function (field) {
        page[field + 'Error'] = '';
      });

      /* ============================================================
       * POLICY NUMBER
       * ============================================================ */

      const policyNumber = (page.policyNo || '').toString().trim();

      if (!policyNumber) {
        setError('policyNo', 'Policy Number is required');
      } else if (!page.policyFetched) {
        setError('policyNo', 'Fetch a valid policy before submitting');
      }

      /* ============================================================
       * DATE OF LOSS
       * ============================================================ */

      if (!page.dateOfLoss) {
        setError('dateOfLoss', 'Date of Loss is required');
      } else {
        const lossDate = new Date(page.dateOfLoss);

        /* --------------------------------------------------------
         * INVALID DATE
         * -------------------------------------------------------- */

        if (isNaN(lossDate.getTime())) {
          setError('dateOfLoss', 'Enter a valid Date of Loss');
        } else if (lossDate > new Date()) {

        /* --------------------------------------------------------
         * FUTURE DATE
         * -------------------------------------------------------- */
          setError('dateOfLoss', 'Date of Loss cannot be in the future');
        } else if (

        /* --------------------------------------------------------
         * POLICY PERIOD
         * -------------------------------------------------------- */
          page.policyFetched &&
          page.policyStartDate &&
          page.policyEndDate
        ) {
          const policyStart = new Date(page.policyStartDate);

          const policyEnd = new Date(page.policyEndDate);

          if (lossDate < policyStart || lossDate > policyEnd) {
            setError(
              'dateOfLoss',
              'Date of Loss must be within the policy period'
            );
          }
        }
      }

      /* ============================================================
       * LOSS TYPE
       * ============================================================ */

      const lossType = (page.lossType || '').toString().trim();

      const validLossTypes = (page.lossTypes || []).map(function (item) {
        return item.value;
      });

      if (!lossType) {
        setError('lossType', 'Loss Type is required');
      } else if (validLossTypes.indexOf(lossType) === -1) {
        setError('lossType', 'Select a valid Loss Type');
      }

      /* ============================================================
       * PRIMARY DAMAGE GROUP
       * ============================================================ */

      const primaryDamageGroup = (page.primaryDamageGroup || '')
        .toString()
        .trim();

      const validPartGroups = (page.partGroups || []).map(function (item) {
        return item.value;
      });

      if (!primaryDamageGroup) {
        setError('primaryDamageGroup', 'Primary Damage Group is required');
      } else if (validPartGroups.indexOf(primaryDamageGroup) === -1) {
        setError('primaryDamageGroup', 'Select a valid Primary Damage Group');
      }

      /* ============================================================
       * ESTIMATED PARTS COST
       * ============================================================ */

      const estimatedPartsCost = page.estimatedPartsCost;

      if (
        estimatedPartsCost === null ||
        estimatedPartsCost === undefined ||
        estimatedPartsCost === ''
      ) {
        setError('estimatedPartsCost', 'Estimated Parts Cost is required');
      } else if (
        !isFinite(Number(estimatedPartsCost)) ||
        Number(estimatedPartsCost) <= 0
      ) {
        setError(
          'estimatedPartsCost',
          'Estimated Parts Cost must be greater than 0'
        );
      } else if (page.idv && Number(estimatedPartsCost) > Number(page.idv)) {
        setError(
          'estimatedPartsCost',
          'Estimated Parts Cost cannot exceed IDV'
        );
      }

      /* ============================================================
       * GARAGE TYPE
       * ============================================================ */

      const garageType = (page.garageType || '').toString().trim();

      if (!garageType) {
        setError('garageType', 'Garage Type is required');
      } else if (garageType !== 'NETWORK' && garageType !== 'NON_NETWORK') {
        setError('garageType', 'Select a valid Garage Type');
      }

      /* ============================================================
       * LOSS DESCRIPTION
       * ============================================================ */

      const lossDescription = (page.lossDescription || '').toString().trim();

      if (!lossDescription) {
        setError('lossDescription', 'Loss Description is required');
      } else if (lossDescription.length > 200) {
        setError(
          'lossDescription',
          'Loss Description cannot exceed 200 characters'
        );
      }

      /* ============================================================
       * FINAL VALIDATION RESULT
       * ============================================================ */

      bh.local.isValid = valid;

      /* ============================================================
       * DEBUG
       * ============================================================ */

      console.log('========================================');

      console.log('MOTOR OD CLAIM VALIDATION RESULT:', bh.local.isValid);

      console.log('VALID:', valid);

      console.log('VALIDATION ERRORS:', page.validationErrors);

      console.log('========================================');

      /* ============================================================
       * VALIDATION FAILED
       * ============================================================ */

      if (!valid) {
        page.submitted = false;

        page.submitting = false;

        page.submitSuccess = false;

        page.submitError =
          'Please correct the highlighted fields before submitting.';

        console.log('CLAIM SUBMISSION BLOCKED - VALIDATION FAILED');
      } else {

      /* ============================================================
       * VALIDATION SUCCESS
       * ============================================================ */
        page.submitted = true;

        page.submitting = true;

        page.submitSuccess = false;

        page.submitError = '';

        page.claimUrl = bh.system.environment.properties.ssdURL + 'createclaim';
        console.log('CLAIM FORM VALIDATION SUCCESSFUL');

        console.log('Ready to call POST /claims');

        bh.local.claimRequest = {
          policyNo: page.policyNo,

          customerName: page.customerName,

          vehicleRegistration: page.vehicleRegistration,

          vehicleType: page.vehicleType,

          yearOfManufacture: page.yearOfManufacture,

          idv: page.idv,

          policyStartDate: page.policyStartDate,

          policyEndDate: page.policyEndDate,

          policyStatus: page.policyStatus,

          dateOfLoss: page.dateOfLoss,

          lossType: page.lossType,

          primaryDamageGroup: page.primaryDamageGroup,

          estimatedPartsCost: page.estimatedPartsCost,

          garageType: page.garageType,

          firFiled: page.firFiled || false,

          validDrivingLicence: page.validDrivingLicence || false,

          lossDescription: page.lossDescription,
        };

        console.log('========== CREATE CLAIM REQUEST ==========');

        console.log(JSON.stringify(bh.local.claimRequest, null, 2));
      }

      console.log('pagee', page);
      bh = this.sd_79RtYPm9q7Dh1X93(bh);
      //appendnew_next_sd_J1xN0lOtm1boOHJJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J1xN0lOtm1boOHJJ');
    }
  }

  sd_79RtYPm9q7Dh1X93(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.isValid,
          false,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_2cq4es96t5CUZACx(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.local.isValid,
          true,
          undefined,
          undefined
        )
      ) {
        bh = this.claimApi(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_79RtYPm9q7Dh1X93');
    }
  }

  sd_2cq4es96t5CUZACx(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(this.page.submitError, 'Close', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_2cq4es96t5CUZACx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2cq4es96t5CUZACx');
    }
  }

  async claimApi(bh) {
    try {
      let requestOptions = {
        url: this.page.claimUrl,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.claimRequest,
      };
      bh.local.createClaimResponse = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_qV2P6MGkedttSQVO(bh);
      //appendnew_next_claimApi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jF05M79C4Bclvip1');
    }
  }

  sd_qV2P6MGkedttSQVO(bh) {
    try {
      const page = this.page;
      /* ============================================================
       * CREATE CLAIM API RESPONSE
       * ============================================================ */

      console.log('========== CREATE CLAIM API RESPONSE ==========');

      console.log(
        'API RESPONSE:',
        JSON.stringify(bh.local.createClaimResponse, null, 2)
      );

      /* ============================================================
       * READ RESPONSE
       * ============================================================ */

      const response = bh.local.createClaimResponse || {};

      /* ============================================================
       * CHECK SUCCESS
       * ============================================================ */

      if (response.success === true) {
        page.submitSuccess = true;
        page.submitting = false;
        page.submitted = true;
        page.submitError = '';

        /* --------------------------------------------------------
         * SAVE RESPONSE INTO PAGE VARIABLES
         * -------------------------------------------------------- */

        page.claimId = response.claimId || '';

        page.claimStatus = response.status || '';

        page.claimCreated = response.success;

        console.log('Claim created successfully');

        console.log('Claim ID:', page.claimId);

        console.log('Claim Status:', page.claimStatus);
      } else {
        page.submitSuccess = false;
        page.submitting = false;
        page.submitError = response.message || 'Unable to create claim.';
      }

      /* ============================================================
       * FINAL DEBUG
       * ============================================================ */

      console.log('========== PAGE CLAIM DATA ==========');

      console.log('claimId:', page.claimId);

      console.log('claimStatus:', page.claimStatus);

      console.log('claimCreated:', page.claimCreated);

      console.log('submitSuccess:', page.submitSuccess);

      console.log('======================================');
      bh = this.sd_ucSKsor2bI37MQvu(bh);
      //appendnew_next_sd_qV2P6MGkedttSQVO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qV2P6MGkedttSQVO');
    }
  }

  sd_ucSKsor2bI37MQvu(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.claimCreated,
          true,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_sqlhhqeZpnpcUxUt(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.claimCreated,
          false,
          undefined,
          undefined
        )
      ) {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ucSKsor2bI37MQvu');
    }
  }

  sd_sqlhhqeZpnpcUxUt(bh) {
    try {
      const successPopupDialog = this.__page_injector__.get(MatDialog);
      const successPopupDialogRef = successPopupDialog.open(
        successPopupComponent,
        { data: bh.local.createClaimResponse, hasBackdrop: true }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sqlhhqeZpnpcUxUt');
    }
  }

  sd_cNJ5omIIp9JQdWQ6(bh) {
    try {
      const page = this.page;

      page.submitting = false;

      page.submitSuccess = false;

      // =====================================================
      // GET STATUS
      // =====================================================

      let statusCode = 500;

      if (bh.error && bh.error.response && bh.error.response.statusCode) {
        statusCode = Number(bh.error.response.statusCode);
      }

      // =====================================================
      // GET ERROR MESSAGE
      // =====================================================

      let errorMessage = String(bh.error?.message || 'Unable to create claim.');

      // =====================================================
      // FALLBACK STATUS FROM MESSAGE
      // =====================================================

      if (errorMessage.includes('Response code 400')) {
        statusCode = 400;
      } else if (errorMessage.includes('Response code 404')) {
        statusCode = 404;
      } else if (errorMessage.includes('Response code 500')) {
        statusCode = 500;
      }

      // =====================================================
      // USER MESSAGE
      // =====================================================

      if (statusCode === 400) {
        page.submitError = 'Invalid claim request.';
      } else if (statusCode === 404) {
        page.submitError = 'Claim service not found.';
      } else if (statusCode >= 500) {
        page.submitError = 'Claim service is temporarily unavailable.';
      } else {
        page.submitError = 'Unable to create claim.';
      }

      page.submitErrorStatus = statusCode;

      console.log('Error Status:', statusCode);

      console.log('Error Message:', page.submitError);
      bh = this.sd_yx1BkxCNPNk3T1bE(bh);
      //appendnew_next_sd_cNJ5omIIp9JQdWQ6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cNJ5omIIp9JQdWQ6');
    }
  }

  sd_yx1BkxCNPNk3T1bE(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(this.page.submitError, 'close', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_yx1BkxCNPNk3T1bE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yx1BkxCNPNk3T1bE');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false ||
      this.sd_nyoITUDncKWQMBf5(bh) ||
      this.sd_DJYIEPImnx7GyXc7(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_nyoITUDncKWQMBf5(bh) {
    const nodes = ['sd_UeM8ilH0fyuuWtjz'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_WFtfSS0H4C1tSEgx(bh);
      //appendnew_next_sd_nyoITUDncKWQMBf5
      return true;
    }
    return false;
  }
  sd_DJYIEPImnx7GyXc7(bh) {
    const nodes = ['sd_jF05M79C4Bclvip1'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_cNJ5omIIp9JQdWQ6(bh);
      //appendnew_next_sd_DJYIEPImnx7GyXc7
      return true;
    }
    return false;
  }
  //appendnew_flow_Claim_pageComponent_Catch
}
