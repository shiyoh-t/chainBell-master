/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $range = Opal.range, $truthy = Opal.truthy, $hash2 = Opal.hash2;

  Opal.add_stubs(['$setPrefixes', '$===', '$getCheckResult', '$getCombineRoll', '$getFullAutoResult', '$roll_bmr_table', '$roll_bms_table', '$roll_1d8_table', '$roll_1d100_table', '$private', '$roll', '$-', '$[]', '$match', '$to_i', '$nil?', '$<=', '$==', '$include?', '$min', '$max', '$roll_with_bonus', '$+', '$join', '$getCheckResultText', '$new', '$abs', '$roll_tens_d10', '$bcdice', '$roll_ones_d10', '$map', '$>=', '$/', '$<', '$=~', '$last_match', '$debug', '$downcase', '$to_s', '$floor', '$>', '$!', '$rollFullAuto', '$each', '$getNextDifficultyMessage', '$getHitResultInfos', '$getHitResultText', '$getHitType', '$getBulletResults', '$[]=', '$shouldStopRollFullAuto?', '$freeze', '$getFumbleable', '$getSuccessListImpaleBulletList', '$getSetOfBullet', '$getHitBulletCountBase', '$to_f', '$isLastBulletTurn', '$ceil', '$getLastHitBulletCount']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'Cthulhu7th');

    var $nesting = [self].concat($parent_nesting), $Cthulhu7th_initialize$1, $Cthulhu7th_rollDiceCommand$2, $Cthulhu7th_roll_1d8_table$3, $Cthulhu7th_roll_1d100_table$4, $Cthulhu7th_getCheckResult$5, $Cthulhu7th_roll_ones_d10$6, $Cthulhu7th_roll_with_bonus$7, $Cthulhu7th_getCheckResultText$10, $Cthulhu7th_getCombineRoll$11, $Cthulhu7th_getFullAutoResult$12, $Cthulhu7th_rollFullAuto$13, $Cthulhu7th_shouldStopRollFullAuto$ques$15, $Cthulhu7th_getHitResultInfos$16, $Cthulhu7th_getHitResultText$17, $Cthulhu7th_getHitType$18, $Cthulhu7th_getBulletResults$19, $Cthulhu7th_getSuccessListImpaleBulletList$20, $Cthulhu7th_getNextDifficultyMessage$21, $Cthulhu7th_getSetOfBullet$22, $Cthulhu7th_getHitBulletCountBase$23, $Cthulhu7th_isLastBulletTurn$24, $Cthulhu7th_getLastHitBulletCount$25, $Cthulhu7th_getFumbleable$26, $Cthulhu7th_roll_bmr_table$27, $Cthulhu7th_roll_bms_table$28;

    self.$$prototype.bonus_dice_range = nil;
    
    Opal.const_set($nesting[0], 'ID', "Cthulhu7th");
    Opal.const_set($nesting[0], 'NAME', "新クトゥルフ神話TRPG");
    Opal.const_set($nesting[0], 'SORT_KEY', "しんくとうるふしんわTRPG");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "※コマンドは入力内容の前方一致で検出しています。\n" + "・判定　CC(x)<=（目標値）\n" + "　x：ボーナス・ペナルティダイス (2～－2)。省略可。\n" + "　目標値が無くても1D100は表示される。\n" + "　ファンブル／失敗／　レギュラー成功／ハード成功／\n" + "　イクストリーム成功／クリティカル を自動判定。\n" + "例）CC<=30　CC(2)<=50 CC(+2)<=50 CC(-1)<=75 CC-1<=50 CC1<=65 CC+1<=65 CC\n" + "\n" + "・組み合わせ判定　(CBR(x,y))\n" + "　目標値 x と y で％ロールを行い、成否を判定。\n" + "　例）CBR(50,20)\n" + "\n" + "・自動火器の射撃判定　FAR(w,x,y,z,d,v)\n" + "　w：弾丸の数(1～100）、x：技能値（1～100）、y：故障ナンバー、\n" + "　z：ボーナス・ペナルティダイス(-2～2)。省略可。\n" + "　d：指定難易度で連射を終える（レギュラー：r,ハード：h,イクストリーム：e）。省略可。\n" + "　v：ボレーの弾丸の数を変更する。省略可。\n" + "　命中数と貫通数、残弾数のみ算出。ダメージ算出はありません。\n" + "例）FAR(25,70,98)　FAR(50,80,98,-1)　far(30,70,99,1,R)\n" + "　　far(25,88,96,2,h,5)　FaR(40,77,100,,e,4)　fAr(20,47,100,,,3)\n" + "\n" + "・各種表\n" + "　【狂気関連】\n" + "　・狂気の発作（リアルタイム）（Bouts of Madness Real Time）　BMR\n" + "　・狂気の発作（サマリー）（Bouts of Madness Summary）　BMS\n" + "　・恐怖症（Sample Phobias）表　PH／マニア（Sample Manias）表　MA\n" + "　【魔術関連】\n" + "　・プッシュ時のキャスティング・ロール（Casting Roll）の失敗表\n" + "　　強力でない呪文の場合　FCL／強力な呪文の場合　FCM\n");
    self.$setPrefixes(["CC\\(\\d+\\)", "CC.*", "CBR\\(\\d+,\\d+\\)", "FAR.*", "BMR", "BMS", "FCL", "FCM", "PH", "MA"]);
    
    Opal.def(self, '$initialize', $Cthulhu7th_initialize$1 = function $$initialize() {
      var $iter = $Cthulhu7th_initialize$1.$$p, $yield = $iter || nil, self = this, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) $Cthulhu7th_initialize$1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', $Cthulhu7th_initialize$1, false), $zuper, $iter);
      return (self.bonus_dice_range = $range(-2, 2, false));
    }, $Cthulhu7th_initialize$1.$$arity = 0);
    
    Opal.def(self, '$rollDiceCommand', $Cthulhu7th_rollDiceCommand$2 = function $$rollDiceCommand(command) {
      var self = this, $case = nil;

      return (function() {$case = command;
      if (/^CC/i['$===']($case)) {return self.$getCheckResult(command)}
      else if (/^CBR/i['$===']($case)) {return self.$getCombineRoll(command)}
      else if (/^FAR/i['$===']($case)) {return self.$getFullAutoResult(command)}
      else if (/^BMR/i['$===']($case)) {return self.$roll_bmr_table()}
      else if (/^BMS/i['$===']($case)) {return self.$roll_bms_table()}
      else if (/^FCL/i['$===']($case)) {return self.$roll_1d8_table("キャスティング・ロール失敗(小)表", $$($nesting, 'FAILED_CASTING_L_TABLE'))}
      else if (/^FCM/i['$===']($case)) {return self.$roll_1d8_table("キャスティング・ロール失敗(大)表", $$($nesting, 'FAILED_CASTING_M_TABLE'))}
      else if (/^PH/i['$===']($case)) {return self.$roll_1d100_table("恐怖症表", $$($nesting, 'PHOBIAS_TABLE'))}
      else if (/^MA/i['$===']($case)) {return self.$roll_1d100_table("マニア表", $$($nesting, 'MANIAS_TABLE'))}
      else {return nil}})()
    }, $Cthulhu7th_rollDiceCommand$2.$$arity = 1);
    self.$private();
    
    Opal.def(self, '$roll_1d8_table', $Cthulhu7th_roll_1d8_table$3 = function $$roll_1d8_table(table_name, table) {
      var $a, $b, self = this, total_n = nil, index = nil, text = nil;

      
      $b = self.$roll(1, 8), $a = Opal.to_ary($b), (total_n = ($a[0] == null ? nil : $a[0])), $b;
      index = $rb_minus(total_n, 1);
      text = table['$[]'](index);
      return "" + (table_name) + "(" + (total_n) + ") ＞ " + (text);
    }, $Cthulhu7th_roll_1d8_table$3.$$arity = 2);
    
    Opal.def(self, '$roll_1d100_table', $Cthulhu7th_roll_1d100_table$4 = function $$roll_1d100_table(table_name, table) {
      var $a, $b, self = this, total_n = nil, index = nil, text = nil;

      
      $b = self.$roll(1, 100), $a = Opal.to_ary($b), (total_n = ($a[0] == null ? nil : $a[0])), $b;
      index = $rb_minus(total_n, 1);
      text = table['$[]'](index);
      return "" + (table_name) + "(" + (total_n) + ") ＞ " + (text);
    }, $Cthulhu7th_roll_1d100_table$4.$$arity = 2);
    
    Opal.def(self, '$getCheckResult', $Cthulhu7th_getCheckResult$5 = function $$getCheckResult(command) {
      var $a, $b, self = this, m = nil, bonus_dice_count = nil, diff = nil, without_compare = nil, dice = nil, total = nil, total_list = nil, output = nil, result_text = nil;

      
      m = /^CC([-+]?\d+)?(<=(\d+))?/i.$match(command);
      if ($truthy(m)) {
      } else {
        return nil
      };
      bonus_dice_count = m['$[]'](1).$to_i();
      diff = m['$[]'](3).$to_i();
      without_compare = ($truthy($a = m['$[]'](2)['$nil?']()) ? $a : $rb_le(diff, 0));
      if ($truthy((($a = bonus_dice_count['$=='](0)) ? $rb_le(diff, 0) : bonus_dice_count['$=='](0)))) {
        
        $b = self.$roll(1, 100), $a = Opal.to_ary($b), (dice = ($a[0] == null ? nil : $a[0])), $b;
        return "" + "1D100 ＞ " + (dice);};
      if ($truthy(self.bonus_dice_range['$include?'](bonus_dice_count))) {
      } else {
        return "" + "エラー。ボーナス・ペナルティダイスの値は" + (self.bonus_dice_range.$min()) + "～" + (self.bonus_dice_range.$max()) + "です。"
      };
      $b = self.$roll_with_bonus(bonus_dice_count), $a = Opal.to_ary($b), (total = ($a[0] == null ? nil : $a[0])), (total_list = ($a[1] == null ? nil : $a[1])), $b;
      if ($truthy(without_compare)) {
        
        output = "" + "(1D100) ボーナス・ペナルティダイス[" + (bonus_dice_count) + "]";
        output = $rb_plus(output, "" + " ＞ " + (total_list.$join(", ")) + " ＞ " + (total));
      } else {
        
        result_text = self.$getCheckResultText(total, diff);
        output = "" + "(1D100<=" + (diff) + ") ボーナス・ペナルティダイス[" + (bonus_dice_count) + "]";
        output = $rb_plus(output, "" + " ＞ " + (total_list.$join(", ")) + " ＞ " + (total) + " ＞ " + (result_text));
      };
      return output;
    }, $Cthulhu7th_getCheckResult$5.$$arity = 1);
    
    Opal.def(self, '$roll_ones_d10', $Cthulhu7th_roll_ones_d10$6 = function $$roll_ones_d10() {
      var $a, $b, self = this, dice = nil;

      
      $b = self.$roll(1, 10), $a = Opal.to_ary($b), (dice = ($a[0] == null ? nil : $a[0])), $b;
      if (dice['$=='](10)) {
        return 0};
      return dice;
    }, $Cthulhu7th_roll_ones_d10$6.$$arity = 0);
    
    Opal.def(self, '$roll_with_bonus', $Cthulhu7th_roll_with_bonus$7 = function $$roll_with_bonus(bonus) {
      var $$8, $$9, self = this, tens_list = nil, ones = nil, dice_list = nil, dice = nil;

      
      tens_list = $send($$($nesting, 'Array'), 'new', [$rb_plus(bonus.$abs(), 1)], ($$8 = function(){var self = $$8.$$s || this;

      return self.$bcdice().$roll_tens_d10()}, $$8.$$s = self, $$8.$$arity = 0, $$8));
      ones = self.$roll_ones_d10();
      dice_list = $send(tens_list, 'map', [], ($$9 = function(tens){var self = $$9.$$s || this, dice = nil;

      
        
        if (tens == null) {
          tens = nil;
        };
        dice = $rb_plus(tens, ones);
        if (dice['$=='](0)) {
          return 100
        } else {
          return dice
        };}, $$9.$$s = self, $$9.$$arity = 1, $$9));
      dice = (function() {if ($truthy($rb_ge(bonus, 0))) {
        return dice_list.$min()
      } else {
        return dice_list.$max()
      }; return nil; })();
      return [dice, dice_list];
    }, $Cthulhu7th_roll_with_bonus$7.$$arity = 1);
    
    Opal.def(self, '$getCheckResultText', $Cthulhu7th_getCheckResultText$10 = function $$getCheckResultText(total, diff, fumbleable) {
      var self = this, fumble_text = nil;

      
      
      if (fumbleable == null) {
        fumbleable = false;
      };
      if ($truthy($rb_le(total, diff))) {
        
        if (total['$=='](1)) {
          return "クリティカル"};
        if ($truthy($rb_le(total, $rb_divide(diff, 5)))) {
          return "イクストリーム成功"};
        if ($truthy($rb_le(total, $rb_divide(diff, 2)))) {
          return "ハード成功"};
        return "レギュラー成功";};
      fumble_text = "ファンブル";
      if (total['$=='](100)) {
        return fumble_text};
      if ($truthy($rb_ge(total, 96))) {
        if ($truthy($rb_lt(diff, 50))) {
          return fumble_text
        } else if ($truthy(fumbleable)) {
          return fumble_text}};
      return "失敗";
    }, $Cthulhu7th_getCheckResultText$10.$$arity = -3);
    
    Opal.def(self, '$getCombineRoll', $Cthulhu7th_getCombineRoll$11 = function $$getCombineRoll(command) {
      var $a, $b, self = this, diff_1 = nil, diff_2 = nil, total = nil, result_1 = nil, result_2 = nil, successList = nil, succesCount = nil, rank = nil;

      
      if ($truthy(/CBR\((\d+),(\d+)\)/i['$=~'](command))) {
      } else {
        return nil
      };
      diff_1 = $$($nesting, 'Regexp').$last_match(1).$to_i();
      diff_2 = $$($nesting, 'Regexp').$last_match(2).$to_i();
      $b = self.$roll(1, 100), $a = Opal.to_ary($b), (total = ($a[0] == null ? nil : $a[0])), $b;
      result_1 = self.$getCheckResultText(total, diff_1);
      result_2 = self.$getCheckResultText(total, diff_2);
      successList = ["クリティカル", "イクストリーム成功", "ハード成功", "レギュラー成功"];
      succesCount = 0;
      if ($truthy(successList['$include?'](result_1))) {
        succesCount = $rb_plus(succesCount, 1)};
      if ($truthy(successList['$include?'](result_2))) {
        succesCount = $rb_plus(succesCount, 1)};
      self.$debug("succesCount", succesCount);
      rank = (function() {if ($truthy($rb_ge(succesCount, 2))) {
        return "成功"
      } else if (succesCount['$=='](1)) {
        return "部分的成功"
      } else {
        return "失敗"
      }; return nil; })();
      return "" + "(1d100<=" + (diff_1) + "," + (diff_2) + ") ＞ " + (total) + "[" + (result_1) + "," + (result_2) + "] ＞ " + (rank);
    }, $Cthulhu7th_getCombineRoll$11.$$arity = 1);
    
    Opal.def(self, '$getFullAutoResult', $Cthulhu7th_getFullAutoResult$12 = function $$getFullAutoResult(command) {
      var $a, $b, self = this, bullet_count = nil, diff = nil, broken_number = nil, bonus_dice_count = nil, stop_count = nil, bullet_set_count_cap = nil, output = nil, bullet_count_limit = nil;

      
      if ($truthy(/^FAR\((-?\d+),(-?\d+),(-?\d+)(?:,(-?\d+)?)?(?:,(-?\w+)?)?(?:,(-?\d+)?)?\)/i['$=~'](command))) {
      } else {
        return nil
      };
      bullet_count = $$($nesting, 'Regexp').$last_match(1).$to_i();
      diff = $$($nesting, 'Regexp').$last_match(2).$to_i();
      broken_number = $$($nesting, 'Regexp').$last_match(3).$to_i();
      bonus_dice_count = ($truthy($a = $$($nesting, 'Regexp').$last_match(4)) ? $a : 0).$to_i();
      stop_count = ($truthy($a = $$($nesting, 'Regexp').$last_match(5)) ? $a : "").$to_s().$downcase();
      bullet_set_count_cap = ($truthy($a = $$($nesting, 'Regexp').$last_match(6)) ? $a : $rb_divide(diff, 10).$floor()).$to_i();
      output = "";
      bullet_count_limit = 100;
      if ($truthy($rb_gt(bullet_count, bullet_count_limit))) {
        
        output = $rb_plus(output, "" + "弾薬が多すぎます。装填された弾薬を" + (bullet_count_limit) + "発に変更します。\n");
        bullet_count = bullet_count_limit;};
      if ($truthy(($truthy($a = ($truthy($b = $rb_gt(bullet_set_count_cap, $rb_divide(diff, 10).$floor())) ? $rb_gt(diff, 39) : $b)) ? $$($nesting, 'Regexp').$last_match(6)['$nil?']()['$!']() : $a))) {
        
        bullet_set_count_cap = $rb_divide(diff, 10).$floor();
        output = $rb_plus(output, "" + "ボレーの弾丸の数の上限は[技能値÷10（切り捨て）]発なので、それより高い数を指定できません。ボレーの弾丸の数を" + (bullet_set_count_cap) + "発に変更します。\n");
      } else if ($truthy(($truthy($a = ($truthy($b = $rb_le(diff, 39)) ? $rb_gt(bullet_set_count_cap, 3) : $b)) ? $$($nesting, 'Regexp').$last_match(6)['$nil?']()['$!']() : $a))) {
        
        bullet_set_count_cap = 3;
        output = $rb_plus(output, "" + "技能値が39以下ではボレーの弾丸の数の上限および下限は3発です。ボレーの弾丸の数を" + (bullet_set_count_cap) + "発に変更します。\n");};
      if ($truthy(($truthy($a = $rb_le(bullet_set_count_cap, 0)) ? $$($nesting, 'Regexp').$last_match(6)['$nil?']()['$!']() : $a))) {
        return "ボレーの弾丸の数は正の数です。"};
      if ($truthy(($truthy($a = $rb_lt(bullet_set_count_cap, 3)) ? $$($nesting, 'Regexp').$last_match(6)['$nil?']()['$!']() : $a))) {
        
        bullet_set_count_cap = 3;
        output = $rb_plus(output, "ボレーの弾丸の数の下限は3発です。ボレーの弾丸の数を3発に変更します。\n");};
      if ($truthy($rb_le(bullet_count, 0))) {
        return "弾薬は正の数です。"};
      if ($truthy($rb_le(diff, 0))) {
        return "目標値は正の数です。"};
      if ($truthy($rb_lt(broken_number, 0))) {
        
        output = $rb_plus(output, "故障ナンバーは正の数です。マイナス記号を外します。\n");
        broken_number = broken_number.$abs();};
      if ($truthy(self.bonus_dice_range['$include?'](bonus_dice_count))) {
      } else {
        return "" + "エラー。ボーナス・ペナルティダイスの値は" + (self.bonus_dice_range.$min()) + "～" + (self.bonus_dice_range.$max()) + "です。"
      };
      output = $rb_plus(output, "" + "ボーナス・ペナルティダイス[" + (bonus_dice_count) + "]");
      output = $rb_plus(output, self.$rollFullAuto(bullet_count, diff, broken_number, bonus_dice_count, stop_count, bullet_set_count_cap));
      return output;
    }, $Cthulhu7th_getFullAutoResult$12.$$arity = 1);
    
    Opal.def(self, '$rollFullAuto', $Cthulhu7th_rollFullAuto$13 = function $$rollFullAuto(bullet_count, diff, broken_number, dice_num, stop_count, bullet_set_count_cap) {try {

      var $$14, self = this, output = nil, loopCount = nil, counts = nil;

      
      output = "";
      loopCount = 0;
      counts = $hash2(["hit_bullet", "impale_bullet", "bullet"], {"hit_bullet": 0, "impale_bullet": 0, "bullet": bullet_count});
      (function(){var $brk = Opal.new_brk(); try {return $send($range(0, 3, false), 'each', [], ($$14 = function(more_difficulty){var self = $$14.$$s || this, $a, $b, $c, hit_result = nil, total = nil, total_list = nil, hit_type = nil, hit_bullet = nil, impale_bullet = nil, lost_bullet = nil, $writer = nil;
        if (self.bonus_dice_range == null) self.bonus_dice_range = nil;

      
        
        if (more_difficulty == null) {
          more_difficulty = nil;
        };
        output = $rb_plus(output, self.$getNextDifficultyMessage(more_difficulty));
        while ($truthy($rb_ge(dice_num, self.bonus_dice_range.$min()))) {
          
          loopCount = $rb_plus(loopCount, 1);
          $c = self.$getHitResultInfos(dice_num, diff, more_difficulty), $b = Opal.to_ary($c), (hit_result = ($b[0] == null ? nil : $b[0])), (total = ($b[1] == null ? nil : $b[1])), (total_list = ($b[2] == null ? nil : $b[2])), $c;
          output = $rb_plus(output, "" + "\n" + (loopCount) + "回目: ＞ " + (total_list.$join(", ")) + " ＞ " + (hit_result));
          if ($truthy($rb_ge(total, broken_number))) {
            
            output = $rb_plus(output, "　ジャム");
            Opal.ret(self.$getHitResultText(output, counts));};
          hit_type = self.$getHitType(more_difficulty, hit_result);
          $c = self.$getBulletResults(counts['$[]']("bullet"), hit_type, diff, bullet_set_count_cap), $b = Opal.to_ary($c), (hit_bullet = ($b[0] == null ? nil : $b[0])), (impale_bullet = ($b[1] == null ? nil : $b[1])), (lost_bullet = ($b[2] == null ? nil : $b[2])), $c;
          output = $rb_plus(output, "" + "　（" + (hit_bullet) + "発が命中、" + (impale_bullet) + "発が貫通）");
          
          $writer = ["hit_bullet", $rb_plus(counts['$[]']("hit_bullet"), hit_bullet)];
          $send(counts, '[]=', Opal.to_a($writer));
          $writer[$rb_minus($writer["length"], 1)];;
          
          $writer = ["impale_bullet", $rb_plus(counts['$[]']("impale_bullet"), impale_bullet)];
          $send(counts, '[]=', Opal.to_a($writer));
          $writer[$rb_minus($writer["length"], 1)];;
          
          $writer = ["bullet", $rb_minus(counts['$[]']("bullet"), lost_bullet)];
          $send(counts, '[]=', Opal.to_a($writer));
          $writer[$rb_minus($writer["length"], 1)];;
          if ($truthy($rb_le(counts['$[]']("bullet"), 0))) {
            Opal.ret(self.$getHitResultText(output, counts))};
          dice_num = $rb_minus(dice_num, 1);
        };
        if ($truthy(self['$shouldStopRollFullAuto?'](stop_count, more_difficulty))) {
          
          output = $rb_plus(output, "\n【指定の難易度となったので、処理を終了します。】");
          
          Opal.brk(nil, $brk);};
        return (dice_num = $rb_plus(dice_num, 1));}, $$14.$$s = self, $$14.$$brk = $brk, $$14.$$arity = 1, $$14))
      } catch (err) { if (err === $brk) { return err.$v } else { throw err } }})();
      return self.$getHitResultText(output, counts);
      } catch ($returner) { if ($returner === Opal.returner) { return $returner.$v } throw $returner; }
    }, $Cthulhu7th_rollFullAuto$13.$$arity = 6);
    Opal.const_set($nesting[0], 'ROLL_FULL_AUTO_DIFFICULTY_THRESHOLD', $hash2(["r", "h", "e"], {"r": 0, "h": 1, "e": 2}).$freeze());
    
    Opal.def(self, '$shouldStopRollFullAuto?', $Cthulhu7th_shouldStopRollFullAuto$ques$15 = function(stop_count, difficulty) {
      var $a, self = this, difficulty_threshold = nil;

      
      difficulty_threshold = $$($nesting, 'ROLL_FULL_AUTO_DIFFICULTY_THRESHOLD')['$[]'](stop_count);
      return ($truthy($a = difficulty_threshold) ? $rb_ge(difficulty, difficulty_threshold) : $a);
    }, $Cthulhu7th_shouldStopRollFullAuto$ques$15.$$arity = 2);
    
    Opal.def(self, '$getHitResultInfos', $Cthulhu7th_getHitResultInfos$16 = function $$getHitResultInfos(dice_num, diff, more_difficulty) {
      var $a, $b, self = this, total = nil, total_list = nil, fumbleable = nil, hit_result = nil;

      
      $b = self.$roll_with_bonus(dice_num), $a = Opal.to_ary($b), (total = ($a[0] == null ? nil : $a[0])), (total_list = ($a[1] == null ? nil : $a[1])), $b;
      fumbleable = self.$getFumbleable(more_difficulty);
      hit_result = self.$getCheckResultText(total, diff, fumbleable);
      return [hit_result, total, total_list];
    }, $Cthulhu7th_getHitResultInfos$16.$$arity = 3);
    
    Opal.def(self, '$getHitResultText', $Cthulhu7th_getHitResultText$17 = function $$getHitResultText(output, counts) {
      var self = this;

      return "" + (output) + "\n＞ " + (counts['$[]']("hit_bullet")) + "発が通常命中、" + (counts['$[]']("impale_bullet")) + "発が貫通、残弾" + (counts['$[]']("bullet")) + "発"
    }, $Cthulhu7th_getHitResultText$17.$$arity = 2);
    
    Opal.def(self, '$getHitType', $Cthulhu7th_getHitType$18 = function $$getHitType(more_difficulty, hit_result) {
      var $a, $b, self = this, successList = nil, impaleBulletList = nil;

      
      $b = self.$getSuccessListImpaleBulletList(more_difficulty), $a = Opal.to_ary($b), (successList = ($a[0] == null ? nil : $a[0])), (impaleBulletList = ($a[1] == null ? nil : $a[1])), $b;
      if ($truthy(successList['$include?'](hit_result))) {
        return "hit"};
      if ($truthy(impaleBulletList['$include?'](hit_result))) {
        return "impale"};
      return "";
    }, $Cthulhu7th_getHitType$18.$$arity = 2);
    
    Opal.def(self, '$getBulletResults', $Cthulhu7th_getBulletResults$19 = function $$getBulletResults(bullet_count, hit_type, diff, bullet_set_count_cap) {
      var self = this, bullet_set_count = nil, hit_bullet_count_base = nil, impale_bullet_count_base = nil, lost_bullet_count = nil, hit_bullet_count = nil, impale_bullet_count = nil, $case = nil;

      
      bullet_set_count = self.$getSetOfBullet(diff, bullet_set_count_cap);
      hit_bullet_count_base = self.$getHitBulletCountBase(diff, bullet_set_count);
      impale_bullet_count_base = $rb_divide(bullet_set_count, (2).$to_f());
      lost_bullet_count = 0;
      hit_bullet_count = 0;
      impale_bullet_count = 0;
      if ($truthy(self.$isLastBulletTurn(bullet_count, bullet_set_count)['$!']())) {
        
        $case = hit_type;
        if ("hit"['$===']($case)) {hit_bullet_count = hit_bullet_count_base}
        else if ("impale"['$===']($case)) {
        impale_bullet_count = impale_bullet_count_base.$floor();
        hit_bullet_count = impale_bullet_count_base.$ceil();};
        lost_bullet_count = bullet_set_count;
      } else {
        
        $case = hit_type;
        if ("hit"['$===']($case)) {hit_bullet_count = self.$getLastHitBulletCount(bullet_count)}
        else if ("impale"['$===']($case)) {
        impale_bullet_count = self.$getLastHitBulletCount(bullet_count);
        hit_bullet_count = $rb_minus(bullet_count, impale_bullet_count);};
        lost_bullet_count = bullet_count;
      };
      return [hit_bullet_count, impale_bullet_count, lost_bullet_count];
    }, $Cthulhu7th_getBulletResults$19.$$arity = 4);
    
    Opal.def(self, '$getSuccessListImpaleBulletList', $Cthulhu7th_getSuccessListImpaleBulletList$20 = function $$getSuccessListImpaleBulletList(more_difficulty) {
      var self = this, successList = nil, impaleBulletList = nil, $case = nil;

      
      successList = [];
      impaleBulletList = [];
      $case = more_difficulty;
      if ((0)['$===']($case)) {
      successList = ["ハード成功", "レギュラー成功"];
      impaleBulletList = ["クリティカル", "イクストリーム成功"];}
      else if ((1)['$===']($case)) {
      successList = ["ハード成功"];
      impaleBulletList = ["クリティカル", "イクストリーム成功"];}
      else if ((2)['$===']($case)) {
      successList = [];
      impaleBulletList = ["クリティカル", "イクストリーム成功"];}
      else if ((3)['$===']($case)) {
      successList = ["クリティカル"];
      impaleBulletList = [];};
      return [successList, impaleBulletList];
    }, $Cthulhu7th_getSuccessListImpaleBulletList$20.$$arity = 1);
    
    Opal.def(self, '$getNextDifficultyMessage', $Cthulhu7th_getNextDifficultyMessage$21 = function $$getNextDifficultyMessage(more_difficulty) {
      var self = this, $case = nil;

      
      $case = more_difficulty;
      if ((1)['$===']($case)) {return "\n【難易度がハードに変更】"}
      else if ((2)['$===']($case)) {return "\n【難易度がイクストリームに変更】"}
      else if ((3)['$===']($case)) {return "\n【難易度がクリティカルに変更】"};
      return "";
    }, $Cthulhu7th_getNextDifficultyMessage$21.$$arity = 1);
    
    Opal.def(self, '$getSetOfBullet', $Cthulhu7th_getSetOfBullet$22 = function $$getSetOfBullet(diff, bullet_set_count_cap) {
      var $a, self = this, bullet_set_count = nil;

      
      bullet_set_count = $rb_divide(diff, 10).$floor();
      if ($truthy($rb_lt(bullet_set_count_cap, bullet_set_count))) {
        bullet_set_count = bullet_set_count_cap};
      if ($truthy(($truthy($a = $rb_ge(diff, 1)) ? $rb_lt(diff, 30) : $a))) {
        bullet_set_count = 3};
      return bullet_set_count;
    }, $Cthulhu7th_getSetOfBullet$22.$$arity = 2);
    
    Opal.def(self, '$getHitBulletCountBase', $Cthulhu7th_getHitBulletCountBase$23 = function $$getHitBulletCountBase(diff, bullet_set_count) {
      var $a, self = this, hit_bullet_count_base = nil;

      
      hit_bullet_count_base = $rb_divide(bullet_set_count, 2).$floor();
      if ($truthy(($truthy($a = $rb_ge(diff, 1)) ? $rb_lt(diff, 30) : $a))) {
        hit_bullet_count_base = 1};
      return hit_bullet_count_base;
    }, $Cthulhu7th_getHitBulletCountBase$23.$$arity = 2);
    
    Opal.def(self, '$isLastBulletTurn', $Cthulhu7th_isLastBulletTurn$24 = function $$isLastBulletTurn(bullet_count, bullet_set_count) {
      var self = this;

      return $rb_lt($rb_minus(bullet_count, bullet_set_count), 0)
    }, $Cthulhu7th_isLastBulletTurn$24.$$arity = 2);
    
    Opal.def(self, '$getLastHitBulletCount', $Cthulhu7th_getLastHitBulletCount$25 = function $$getLastHitBulletCount(bullet_count) {
      var self = this, count = nil;

      
      if (bullet_count['$=='](1)) {
        return 1};
      count = $rb_divide(bullet_count, (2).$to_f()).$floor();
      return count;
    }, $Cthulhu7th_getLastHitBulletCount$25.$$arity = 1);
    
    Opal.def(self, '$getFumbleable', $Cthulhu7th_getFumbleable$26 = function $$getFumbleable(more_difficulty) {
      var self = this;

      return $rb_ge(more_difficulty, 1)
    }, $Cthulhu7th_getFumbleable$26.$$arity = 1);
    
    Opal.def(self, '$roll_bmr_table', $Cthulhu7th_roll_bmr_table$27 = function $$roll_bmr_table() {
      var $a, $b, self = this, total_n = nil, text = nil, time_n = nil;

      
      $b = self.$roll(1, 10), $a = Opal.to_ary($b), (total_n = ($a[0] == null ? nil : $a[0])), $b;
      text = $$($nesting, 'MADNESS_REAL_TIME_TABLE')['$[]']($rb_minus(total_n, 1));
      $b = self.$roll(1, 10), $a = Opal.to_ary($b), (time_n = ($a[0] == null ? nil : $a[0])), $b;
      return "" + "狂気の発作（リアルタイム）(" + (total_n) + ") ＞ " + (text) + "(1D10＞" + (time_n) + "ラウンド)";
    }, $Cthulhu7th_roll_bmr_table$27.$$arity = 0);
    Opal.const_set($nesting[0], 'MADNESS_REAL_TIME_TABLE', ["健忘症：探索者は、最後に安全な場所にいた時からあとに起こった出来事の記憶を持たない。例えば、朝食を食べていた次の瞬間には怪物と向かい合っている。これは1D10ラウンド続く。", "身体症状症：探索者は1D10ラウンドの間、狂気によって視覚や聴覚に異常が生じたり、四肢の1つまたは複数が動かなくなる。", "暴力衝動：赤い霧が探索者に降り、1D10ラウンドの間、抑えの利かない暴力と破壊を敵味方を問わず周囲に向かって爆発させる。", "偏執症：探索者は1D10ラウンドの間、重い偏執症に襲われる。誰もが探索者に襲い掛かろうとしている。信用できる者はいない。監視されている。裏切ったやつがいる。これはわなだ。", "重要な人々：探索者のバックストーリーの重要な人々を見直す。探索者はその場にいた人物を、自分にとっての重要な人々だと思い込む。人間関係の性質を考慮した上で、探索者はそれに従って行動する。1D10ラウンド続く。", "失神：探索者は失神する。1D10ラウンド後に回復する。", "パニックになって逃亡する：探索者は利用できるあらゆる手段を使って、可能なかぎり遠くへ逃げ出さずにはいられない。それが唯一の車両を奪って仲間を置き去りにすることであっても。探索者は1D10ラウンドの間、逃げ続ける。", "身体的ヒステリーもしくは感情爆発：探索者は1D10ラウンドの間、笑ったり、泣いたり、あるいは叫んだりし続け、行動できなくなる。", "恐怖症：探索者は新しい恐怖症に陥る。恐怖症表（PHコマンド）をロールするか、キーパーが恐怖症を1つ選ぶ。恐怖症の原因は存在しなくとも、その探索者は次の1D10ラウンドの間、それがそこにあると思い込む。", "マニア：探索者は新しいマニアに陥る。マニア表（MAコマンド）をロールするか、キーパーがマニアを1つ選ぶ。その探索者は次の1D10ラウンドの間、自分の新しいマニアに没頭しようとする。"].$freeze());
    
    Opal.def(self, '$roll_bms_table', $Cthulhu7th_roll_bms_table$28 = function $$roll_bms_table() {
      var $a, $b, self = this, total_n = nil, text = nil, time_n = nil;

      
      $b = self.$roll(1, 10), $a = Opal.to_ary($b), (total_n = ($a[0] == null ? nil : $a[0])), $b;
      text = $$($nesting, 'MADNESS_SUMMARY_TABLE')['$[]']($rb_minus(total_n, 1));
      $b = self.$roll(1, 10), $a = Opal.to_ary($b), (time_n = ($a[0] == null ? nil : $a[0])), $b;
      return "" + "狂気の発作（サマリー）(" + (total_n) + ") ＞ " + (text) + "(1D10＞" + (time_n) + "時間)";
    }, $Cthulhu7th_roll_bms_table$28.$$arity = 0);
    Opal.const_set($nesting[0], 'MADNESS_SUMMARY_TABLE', ["健忘症：探索者が意識を取り戻すと、見知らぬ場所におり、自分が誰かもわからない。記憶は時間をかけてゆっくりと戻るだろう。", "盗難：探索者は1D10時間後に意識を取り戻すが、盗難の被害を受けている。傷つけられてはいない。探索者が秘蔵の品を身に着けていた場合（「探索者のバックストーリー」参照）、〈幸運〉ロールを行い、それが盗まれていないか判定する。値打ちのあるものはすべて自動的に失われる。", "暴行：探索者は1D10時間後に意識を取り戻し、自分が暴行を受け、傷ついていることに気づく。耐久力は狂気に陥る前の半分に減少している。ただし重症は生じていない。盗まれたものはない。どのようにダメージが加えられたかは、キーパーに委ねられる。", "暴力：探索者は暴力と破壊の噴流を爆発させる。探索者が意識を取り戻した時、その行動を認識し記憶していることもあればそうでないこともある。探索者が暴力を振るった物、もしくは人、そして相手を殺してしまったのか、あるいは単に傷つけただけなのかはキーパーに委ねられる。", "イデオロギー／信念：探索者のバックストーリーのイデオロギーと信念を参照する。探索者はこれらの1つの権化となり、急進的かつ狂気じみて、感情もあらわに主張するようになる。例えば、宗教に関係する者は、その後地下鉄で声高に福音を説教しているところを目撃されるかもしれない。", "重要な人々：探索者のバックストーリーの重要な人々を参照し、なぜその人物との関係が重要かを考える。時間がたってから（1D10時間以上）、探索者はその人物に近づくための最善の行動、そしてその人物との関係にとって最善の行動をとる。", "収容：探索者は精神療養施設あるいは警察の留置所で意識を取り戻す。探索者は徐々にそこにいたった出来事を思い出すかもしれない。", "パニック：探索者は非常に遠い場所で意識を取り戻す。荒野で道に迷っているか、列車に乗っているか、長距離バスに乗っているかもしれない。", "恐怖症：探索者は新たな恐怖症を獲得する。恐怖症表（PHコマンド）をロールするか、キーパーがどれか1つ選ぶ。探索者は1D10時間後に意識を取り戻し、この新たな恐怖症の対象を避けるためにあらゆる努力をする。", "マニア：探索者は新たなマニアを獲得する。マニア表（MAコマンド）をロールするか、キーパーがどれか1つ選ぶ。この狂気の発作の間、探索者はこの新たなマニアに完全に溺れているだろう。これがほかの人々に気づかれるかどうかは、キーパーとプレイヤーに委ねられる。"].$freeze());
    Opal.const_set($nesting[0], 'FAILED_CASTING_L_TABLE', ["視界がぼんやりするか、あるいは一時的な失明。", "悲鳴、声、あるいはほかの雑音が肉体から発せられる。", "強風やほかの大気の現象。", "術者、ほかのその場に居合わせた者が出血する。あるいは環境（例えば、壁）から出血する。", "奇妙な幻視と幻覚。", "その付近の小動物たちが爆発する。", "硫黄の悪臭。", "クトゥルフ神話の怪物が偶然召喚される。"].$freeze());
    Opal.const_set($nesting[0], 'FAILED_CASTING_M_TABLE', ["大地が震え、壁に亀裂が入って崩れる。", "叙事詩的な電撃。", "血が空から降る。", "術者の手がしなび、焼けただれる。", "術者は不自然に年をとる（年齢に+2D10歳、30ページの「年齢」を参照し、能力値に修正を適用すること）。", "強力な、あるいは無数のクトゥルフ神話存在が現れ、術者を手始めに、近くの全員を攻撃する！", "術者や近くの全員が遠い時代か場所に吸い込まれる。", "クトゥルフ神話の神格が偶然招来される。"].$freeze());
    Opal.const_set($nesting[0], 'PHOBIAS_TABLE', ["入浴恐怖症：体、手、顔を洗うのが怖い。", "高所恐怖症：高いところが怖い。", "飛行恐怖症：飛ぶのが怖い。", "広場恐怖症：広場、公共の(混雑した)場所が怖い。", "鶏肉恐怖症：鶏肉が怖い。", "ニンニク恐怖症：ニンニクが怖い。", "乗車恐怖症：車両の中にいたり車両に乗るのが怖い。", "風恐怖症：風が怖い。", "男性恐怖症：男性が怖い。", "イングランド恐怖症：イングランド、もしくはイングランド文化などが怖い。", "花恐怖症：花が怖い。", "切断恐怖症：手足や指などが切断された人が怖い。", "クモ恐怖症：クモが怖い。", "稲妻恐怖症：稲妻が怖い。", "廃墟恐怖症：廃墟が怖い。", "笛恐怖症：笛(フルート)が怖い。", "細菌恐怖症：細菌、バクテリアが怖い。", "銃弾恐怖症：投擲物や銃弾が怖い。", "落下恐怖症：落下が怖い。", "書物恐怖症：本が怖い。", "植物恐怖症：植物が怖い。", "美女恐怖症：美しい女性が怖い。", "低温恐怖症：冷たいものが怖い。", "時計恐怖症：時計が怖い。", "閉所恐怖症：壁に囲まれた場所が怖い。", "道化師恐怖症：道化師が怖い。", "犬恐怖症：犬が怖い。", "悪魔恐怖症：悪魔が怖い。", "群集恐怖症：人混みが怖い。", "歯科医恐怖症：歯科医が怖い。", "処分恐怖症：物を捨てるのが怖い(ためこみ症)", "毛皮恐怖症：毛皮が怖い。", "構断恐怖症：道路を横断するのが怖い。", "教会恐怖症：教会が怖い。", "鏡恐怖症：鏡が怖い。", "ピン恐怖症：針やピンが怖い。", "昆虫恐怖症：昆虫が怖い。", "猫恐怖症：猫が怖い。", "橋恐怖症：橋を渡るのが怖い。", "老人恐怖症：老人や年をとることが怖い。", "女性恐怖症：女性が怖い。", "血液恐怖症：血が怖い。", "過失恐怖症：失敗が怖い。", "接触恐怖症：触ることが怖い。", "爬虫類恐怖症：爬虫類が怖い。", "霧恐怖症：霧が怖い。", "銃器恐怖症：銃器が怖い。", "水恐怖症：水が怖い。", "睡眠恐怖症：眠ったり、催眠状態に陥るのが怖い。", "医師恐怖症：医師が怖い。", "魚恐怖症：魚が怖い。", "ゴキブリ恐怖症：ゴキブリが怖い。", "雷鳴恐怖症：雷鳴が怖い。", "野菜恐怖症：野菜が怖い。", "大騒音恐怖症：大きな騒音が怖い。", "湖恐怖症：湖が怖い。", "機械恐怖症：機械や装置が怖い。", "巨大物恐怖症：巨大なものが怖い。", "拘束恐怖症：縛られたり結びつけられたりするのが怖い。", "隕石恐怖症：流星や隕石が怖い。", "孤独恐怖症：独りでいることが怖い。", "汚染恐怖症：汚れたり汚染されたりするのが怖い。", "粘液恐怖症：粘液、粘体が怖い。", "死体恐怖症：死体が怖い。", "8恐怖症：8の数字が怖い。", "歯恐怖症：歯が怖い。", "夢恐怖症：夢が怖い。", "名称恐怖症：特定の言葉（1つまたは複数）を聞くのが怖い。", "蛇恐怖症：蛇が怖い。", "鳥恐怖症：鳥が怖い。", "寄生生物恐怖症：寄生生物が怖い。", "人形恐怖症：人形が怖い。", "恐食症：のみ込むこと食べること、もしくは食べられることが怖い。", "薬物恐怖症：薬物が怖い。", "幽霊恐怖症：幽霊が怖い。", "羞明：日光が怖い。", "ひげ恐怖症：ひげが怖い", "河川恐怖症：川が怖い", "アルコール恐怖症：アルコールやアルコール飲料が怖い。", "火恐怖症：火が怖い。", "魔術恐怖症：魔術が怖い。", "暗黒恐怖症：暗闇や夜が怖い。", "月恐怖症：月が怖い。", "鉄道恐怖症：列車の旅が怖い。", "星恐怖症：星が怖い。", "狭所恐怖症：狭いものや場所が怖い。", "対称恐怖症：左右対称が怖い。", "生き埋め恐怖症：生き埋めになることや墓地が怖い。", "雄牛恐怖症：雄牛が怖い。", "電話恐怖症：電話が怖い。", "奇形恐怖症：怪物が怖い。", "海洋恐怖症：海が怖い。", "手術恐怖症：外科手術が怖い。", "13恐怖症：13の数字が怖い。", "衣類恐怖症：衣服が怖い。", "魔女恐怖症：魔女と魔術が怖い。", "黄色恐怖症：黄色や「黄色」という言葉が怖い。", "外国語恐怖症：外国語が怖い。", "外国人恐怖症：外国人が怖い。", "動物恐怖症：動物が怖い。"].$freeze());
    return Opal.const_set($nesting[0], 'MANIAS_TABLE', ["洗浄マニア：自分の体を洗わずにはいられない。", "無為マニア：病的な優柔不断。", "暗闇マニア：暗黒に関する過度の嗜好。", "高所マニア：高い場所に登らずにはいられない。", "善良マニア：病的な親切。", "広場マニア：開けた場所にいたいという激しい願望。", "先鋭マニア：鋭いもの、とがったものへの執着。", "猫マニア：猫に関する異常な愛好心。", "疼痛性愛：痛みへの執着。", "にんにくマニア：にんにくへの執着。", "乗り物マニア：車の中にいることへの執着。", "病的快活：不合理なほがらかさ。", "花マニア：花への執着。", "計算マニア：数への偏執的な没頭。", "浪費マニア：衝動的あるいは無謀な浪費。", "自己マニア：孤独への過度の嗜好。", "バレエマニア：バレエに関する異常な愛好心。", "書籍約盗癖：本を盗みたいという強迫的衝動。", "書物マニア：本または読書、あるいはその両方への執着。", "歯ぎしりマニア：歯ぎしりしたいという強迫的衝動。", "悪霊マニア：誰かの中に邪悪な精霊がいるという病的な信念。", "自己愛マニア：自分自身の美への執着。", "地図マニア：いたる所の地図を見る制御不可能な強迫的衝動。", "飛び降りマニア：高い場所から跳躍することへの執着。", "寒冷マニア：冷たさ、または冷たいもの、あるいはその両方への異常な欲望。", "舞踏マニア：踊ることへの愛好もしくは制御不可能な熱狂。", "睡眠マニア：寝ることへの過度の願望。", "墓地マニア：墓地への執着。", "色彩マニア：特定の色への執着。", "ピエロマニア：ピエロへの執着。", "遭遇マニア：恐ろしい状況を経験したいという強迫的衝動。", "殺害マニア：殺害への執着。", "悪魔マニア：誰かが悪魔にとりつかれているという病的な信念。", "皮膚マニア：人の皮膚を引っぱりたいという強迫的衝動。", "正義マニア：正義が完遂されるのを見たいという執着。", "アルコールマニア：アルコールに関する異常な欲求。", "毛皮マニア：毛皮を所有することへの執着。", "贈り物マニア：贈り物を与えることへの執着。", "逃走マニア：逃走することへの迫的衝動。", "外出マニア：外を歩き回ることの強迫的衝動。", "自己中心マニア：不合理な自心の態度か自己崇拝。", "公職マニア：公的な職業に就きいという強欲な衝動。", "戦慄マニア：誰かが罪を犯したという病的な信念", "知識マニア：知識を得ることへ執着。", "静寂マニア：静寂であることへ強迫的衝動。", "エーテルマニア：エーテルへの切望", "求婚マニア：奇妙な求婚をすることへの執着。", "笑いマニア：制御不可能な笑うことへの強迫的衝動。", "魔術マニア：魔女と魔術への執着。", "筆記マニア：すべてを書き留めることへの執着。", "裸体マニア：裸になりたいという強迫的衝動。", "幻想マニア：快い幻想(現実とは関係なく)にとらわれやすい異常な傾向。", "蟲マニア：蟲に関する過度の嗜好。", "火器マニア：火器への執着。", "水マニア：水に関する不合理な渇望。", "魚マニア：魚への執着。", "アイコンマニア：像や肖像への執着。", "アイドルマニア：偶像への執着または献身。", "情報マニア：事実を集めることへの過度の献身。", "絶叫マニア：叫ぶことへの説明できない強迫的衝動。", "窃盗マニア：盗むことへの説明できない強迫的衝動。", "騒音マニア：大きな、あるいは甲高い騒音を出すことへの制御不可能な強迫的衝動。", "ひもマニア：ひもへの執着。", "宝くじマニア：宝くじに参加したいという極度の願望。", "うつマニア：異常に深くふさぎ込む傾向。", "巨石マニア：環状列石/立石があると奇妙な考えにとらわれる異常な傾向。", "音楽マニア：音楽もしくは特定の旋律への執着。", "作詩マニア：詩を書くことへの強欲な願望。", "憎悪マニア：何らかの対象あるいはグループの何もかもを憎む執着。", "偏執マニア：ただ1つの思想やアイデアへの異常な執着。", "虚言マニア：異常なほどにうそをついたり、誇張して話す。", "疾病マニア：想像上の病気に苦められる幻想。", "記録マニア：あらゆるものを記録に残そうという強迫的衝動。", "名前マニア：人々、場所、ものなどの名前への執着", "単語マニア：ある単語を繰り返したいという押さえ切れない欲求。", "爪損傷マニア：指の爪をむしったりはがそうとする強迫的衝動。", "美食マニア：1種類の食物への異常な愛。", "不平マニア：不平を言うことへの異常な喜び。", "仮面マニア：仮面や覆面を着けたいという強迫的衝動。", "幽霊マニア：幽霊への執着。", "殺人マニア：殺人への病的な傾向。", "光線マニア：光への病的な願望。", "放浪マニア：社会の規範に背きたいという異常な欲望。", "長者マニア：富への強迫的な欲望。", "病的虚言マニア：うそをつきたくてたまらない強迫的衝動。", "放火マニア：火をつけることへの強迫的衝動。", "質問マニア：質問したいという激しい強迫的衝動。", "鼻マニア：鼻をいじりたいという強迫的衝動。", "落書きマニア：いらずら書きや落書きへの執着。", "列車マニア：列車と鉄道旅行への強い魅了。", "知性マニア：誰かが信じられないほど知的であるという幻想。", "テクノマニア：新技術への執着。", "タナトスマニア：誰かが死を招く魔術によって呪われているという信念。", "宗教マニア：その人が神であるという信仰。", "かき傷マニア：かき傷をつけることへの強迫的衝動。", "手術マニア：外科手術を行なうことへの不合理な嗜好。", "抜毛マニア：自分の髪を引き抜くことへの切望。", "失明マニア：病的な視覚障害。", "異国マニア：外国のものへの執着。", "動物マニア：動物への正気でない溺愛。"].$freeze());
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
